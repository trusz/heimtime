import { PublicClientApplication, SilentRequest, AuthenticationResult, Configuration, LogLevel, AccountInfo, InteractionRequiredAuthError, RedirectRequest, PopupRequest, EndSessionRequest, SsoSilentRequest } from "@azure/msal-browser";
import { msal_config } from "./config"

/**
 * AuthModule for application - handles authentication in app.
 */
export class Auth_Module {

    private myMSALObj: PublicClientApplication; // https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-browser/classes/_src_app_publicclientapplication_.publicclientapplication.html
    private account: AccountInfo | null; // https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-common/modules/_src_account_accountinfo_.html
    private loginRedirectRequest: RedirectRequest; // https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-browser/modules/_src_request_redirectrequest_.html
    private loginRequest: PopupRequest; // https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-browser/modules/_src_request_popuprequest_.html
    private profileRedirectRequest: RedirectRequest;
    private profileRequest: PopupRequest;
    private mailRedirectRequest: RedirectRequest;
    private mailRequest: PopupRequest;
    private silentProfileRequest: SilentRequest; // https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-browser/modules/_src_request_silentrequest_.html
    private silentMailRequest: SilentRequest;
    private silentLoginRequest: SsoSilentRequest;
    private heimat_base_url: string

    constructor(heimat_base_url: string) {
        this.heimat_base_url = heimat_base_url
        this.myMSALObj = new PublicClientApplication(msal_config);
        this.account = null;

        this.loginRequest = {
            scopes: []
        };

        this.loginRedirectRequest = {
            ...this.loginRequest,
            redirectStartPage: window.location.href
        };

        this.profileRequest = {
            scopes: ["User.Read"]
        };

        this.profileRedirectRequest = {
            ...this.profileRequest,
            redirectStartPage: window.location.href
        };

        // Add here scopes for access token to be used at MS Graph API endpoints.
        this.mailRequest = {
            scopes: ["Mail.Read"]
        };

        this.mailRedirectRequest = {
            ...this.mailRequest,
            redirectStartPage: window.location.href
        };

        this.silentProfileRequest = {
            scopes: ["openid", "profile", "User.Read"],
            forceRefresh: false
        };

        this.silentMailRequest = {
            scopes: ["openid", "profile", "Mail.Read"],
            forceRefresh: false
        };

        this.silentLoginRequest = {
            loginHint: "IDLAB@msidlab0.ccsctp.net"
        }
    }

    /**
     * Calls getAllAccounts and determines the correct account to sign into, currently defaults to first account found in cache.
     * TODO: Add account chooser code
     * 
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
     */
    private getAccount(): AccountInfo | null {
        // need to call getAccount here?
        const currentAccounts = this.myMSALObj.getAllAccounts();
        if (currentAccounts === null) {
            console.log("No accounts detected");
            return null;
        }

        if (currentAccounts.length > 1) {
            // Add choose account code here
            console.log("Multiple accounts detected, need to add choose account code.");
            return currentAccounts[0];
        } else if (currentAccounts.length === 1) {
            return currentAccounts[0];
        }

        return null;
    }

    /**
     * Checks whether we are in the middle of a redirect and handles state accordingly. Only required for redirect flows.
     * 
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/initialization.md#redirect-apis
     */
    async load(): Promise<void> {
        const resp = await this.myMSALObj.handleRedirectPromise()
        //      ^?
        await this.handleResponse(resp);
    }

    public jwt_get(): string {
        const jwt = this.get_JWT_from_local_storage()
        if(!jwt){
            return ""
        }
        return jwt
    }

    private static jwt_storage_key = "auth_token"
    private save_JWT_to_local_storage(jwt: string){
        localStorage.setItem(Auth_Module.jwt_storage_key, jwt)
    }
    private get_JWT_from_local_storage(): string | null {
        return localStorage.getItem(Auth_Module.jwt_storage_key)
    }

    /**
     * Handles the response from a popup or redirect. If response is null, will check if we have any accounts and attempt to sign in.
     * @param response 
     */
    async handleResponse(response: AuthenticationResult | null) {
        if (response !== null) {
            this.account = response.account;
            const idToken = response.idToken
            const url = new URL("authentication/oidc", this.heimat_base_url)
            const resp = await fetch(url,{
                method: "POST",
                body: JSON.stringify({token: idToken}),
                headers:{
                    "content-type":"application/json;charset=UTF-8"
                }
            })
            console.log({level:"dev", msg:"got token", resp})
            const body = await resp.json()
            const token = body.token
            this.save_JWT_to_local_storage(token)
        } else {
            this.account = this.getAccount();
        }

        if (this.account) {
			console.log({level:"dev", msg:"show welcome message", account: this.account, response})
            // UIManager.showWelcomeMessage(this.account);
        }
    }

    /**
     * Calls ssoSilent to attempt silent flow. If it fails due to interaction required error, it will prompt the user to login using popup.
     * @param request 
     */
    attempt_sso_silent() {
        this.myMSALObj.ssoSilent(this.silentLoginRequest).then((res) => {
            console.log({level:"dev", msg:"sso_silent", res })
            this.account = this.getAccount();
            if (this.account) {
				console.log({level:"dev", msg:"sso silent welcome message"})
                // UIManager.showWelcomeMessage(this.account);
            } else {
                console.log("No account!");
            }
        }).catch(error => {
            console.error("Silent Error: " + error);
            if (error instanceof InteractionRequiredAuthError) {
                this.login("loginPopup");
            }
        })
    }

    /**
     * Calls loginPopup or loginRedirect based on given signInType.
     * @param signInType 
     */
    login(signInType: string): void {
        if (signInType === "loginPopup") {
            this.myMSALObj.loginPopup(this.loginRequest).then((resp: AuthenticationResult) => {
                this.handleResponse(resp);
            }).catch(console.error);
        } else if (signInType === "loginRedirect") {
            this.myMSALObj.loginRedirect(this.loginRedirectRequest);
        }
    }

    /**
     * Logs out of current account.
     */
    logout(): void {
        let account: AccountInfo | undefined;
        if (this.account) {
            account = this.account
        }
        const logOutRequest: EndSessionRequest = {
            account
        };
        
        this.myMSALObj.logoutRedirect(logOutRequest);
    }

    /**
     * Gets the token to read user profile data from MS Graph silently, or falls back to interactive redirect.
     */
    async getProfileTokenRedirect(): Promise<string|null> {
        if (this.account) {
            this.silentProfileRequest.account = this.account;
        }
        return this.getTokenRedirect(this.silentProfileRequest, this.profileRedirectRequest);
    }

    /**
     * Gets the token to read user profile data from MS Graph silently, or falls back to interactive popup.
     */
    async getProfileTokenPopup(): Promise<string|null> {
        if (this.account) {
            this.silentProfileRequest.account = this.account;
        }
        return this.getTokenPopup(this.silentProfileRequest, this.profileRequest);
    }

    /**
     * Gets the token to read mail data from MS Graph silently, or falls back to interactive redirect.
     */
    async getMailTokenRedirect(): Promise<string|null> {
        if (this.account) {
            this.silentMailRequest.account = this.account;
        }
        return this.getTokenRedirect(this.silentMailRequest, this.mailRedirectRequest);
    }

    /**
     * Gets the token to read mail data from MS Graph silently, or falls back to interactive popup.
     */
    async getMailTokenPopup(): Promise<string|null> {
        if (this.account) {
            this.silentMailRequest.account = this.account;
        }
        return this.getTokenPopup(this.silentMailRequest, this.mailRequest);
    }

    /**
     * Gets a token silently, or falls back to interactive popup.
     */
    private async getTokenPopup(silentRequest: SilentRequest, interactiveRequest: PopupRequest): Promise<string|null> {
        try {
            const response: AuthenticationResult = await this.myMSALObj.acquireTokenSilent(silentRequest);
            return response.accessToken;
        } catch (e) {
            console.log("silent token acquisition fails.");
            if (e instanceof InteractionRequiredAuthError) {
                console.log("acquiring token using redirect");
                return this.myMSALObj.acquireTokenPopup(interactiveRequest).then((resp) => {
                    return resp.accessToken;
                }).catch((err) => {
                    console.error(err);
                    return null;
                });
            } else {
                console.error(e);
            }
        }

        return null;
    }

    /**
     * Gets a token silently, or falls back to interactive redirect.
     */
    private async getTokenRedirect(silentRequest: SilentRequest, interactiveRequest: RedirectRequest): Promise<string|null> {
        try {
            const response = await this.myMSALObj.acquireTokenSilent(silentRequest);
            return response.accessToken;
        } catch (e) {
            console.log("silent token acquisition fails.");
            if (e instanceof InteractionRequiredAuthError) {
                console.log("acquiring token using redirect");
                this.myMSALObj.acquireTokenRedirect(interactiveRequest).catch(console.error);
            } else {
                console.error(e);
            }
        }

        return null;
    }
}