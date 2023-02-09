import { Project_API, HTTP, Time_Entry_API  } from "@heimtime/api"

export class API {
	constructor(
		private jwt: 	 string = "",
		private base_url: string = "",
	){
		const claims = parse_jwt<Claims>(jwt)
		this.http = new HTTP(jwt)
		this.project_api = new Project_API(this.http, base_url, claims.employeeId)
		this.time_entry_api = new Time_Entry_API(this.http, base_url, claims.employeeId)
	}

	private http: HTTP
	private project_api: Project_API
	private time_entry_api: Time_Entry_API
	
	public fetch_projects = (d: Date = new Date()) => this.project_api.fetch_projects(d)
	public fetch_time_entires = (f: Date, t:Date) => this.time_entry_api.fetch_time_entries(f,t)

	public set_base_url(url: string){
		this.base_url = url
		this.project_api.base_url = url
	}

	public jwt_set(jwt: string){
		this.jwt = jwt
		this.http.jwt = this.jwt
	}
	public jwt_get(): string {
		return this.jwt
	}


	
}

function parse_jwt<T>(token: string): T {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

type Claims = {
	employeeId: number
}