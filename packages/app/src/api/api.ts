import { Project_API, HTTP  } from "@heimtime/api"

export class API {
	constructor(
		private jwt: 	 string = "",
		private base_url: string = "",
	){
		this.http = new HTTP(jwt)
		this.project_api = new Project_API(this.http, base_url)
	}

	private http:HTTP
	
	public fetch_projects = () => this.project_api.fetch_projects(new Date())

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


	private project_api: Project_API
}