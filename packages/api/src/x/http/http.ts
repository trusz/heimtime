
type Method = "GET" | "POST" | "PUT" | "DELETE"
type JSON_Response<T> = Omit<Response, "body"> & {body: T}

export class HTTP {
	constructor(
		public jwt: string
	){}

    public async get<T>(url: string): Promise<JSON_Response<T>>{
        return this.fetch<T>("GET", url)
    }

    public async post<T>(url: string, payload?: unknown): Promise<JSON_Response<T>> {
        return this.fetch<T>("POST", url, payload)
    }
    
    private Auth_Header(): string  {
        return `Bearer ${this.jwt}`
    }

    private async fetch<T>(method: Method, url: string, payload?:unknown): Promise<JSON_Response<T>>{

        let body: string | undefined = undefined
        if(payload !== undefined){
            body = JSON.stringify(payload)
        }
    
        const resp = await fetch(url, {
            method,
            headers: {
                Authorization: this.Auth_Header(),
                Accept:        "application/json",
            },
            body,
        })

        let body_text = await resp.text()
        let json_body = {} as T
        try{
            json_body = JSON.parse(body_text) as T
        }catch(err){
            console.warn({level:"error", msg:"fetch: could not parse response to json", err, body_text})
        }
    
        const typedResponse = {
            ...resp,
            body: json_body
        }
    
        return typedResponse
    }
    
}
