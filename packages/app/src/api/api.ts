import { Project_API, HTTP, Time_Entry_API, Employee_API, type Time_Entry  } from "@heimtime/api"

export class API {
	constructor(
		private jwt: 	 string = "",
		private base_url: string = "",
	){
		
		if(jwt!==""){
			const claims = parse_jwt<Claims>(jwt)
			this.employee_id = claims.employeeId
		}

		this.http = new HTTP(jwt)
		this.employee_api = new Employee_API(this.http, base_url)
		this.project_api = new Project_API(this.http, base_url, this.employee_id)
		this.time_entry_api = new Time_Entry_API(this.http, base_url, this.employee_id)

	}

	private http: HTTP
	private project_api: Project_API
	private time_entry_api: Time_Entry_API
	private employee_api: Employee_API
	
	public employee_id = -1
	public fetch_projects = (d: Date = new Date()) => this.project_api.fetch_projects(d)
	public fetch_time_entires = (f: Date, t:Date) => this.time_entry_api.fetch_time_entries(f,t)
	public save_time_entry = (te: Time_Entry) => this.time_entry_api.save_time_entry(te)
	public update_time_entry = (te: Time_Entry) => this.time_entry_api.update_time_entry(te)
	public delete_time_entry = (te: Time_Entry) => this.time_entry_api.delete_time_entry(te)
	public fetch_employee = (id: number) => this.employee_api.fetch_employee(id)

	public set_base_url(url: string){
		this.base_url = url

		this.project_api.base_url = url
		this.employee_api.base_url = url
		this.time_entry_api.base_url = url
	}

	public jwt_set(jwt: string){
		this.jwt = jwt
		this.http.jwt = this.jwt
		const claims = parse_jwt<Claims>(jwt)

		this.employee_id = claims.employeeId
		this.project_api = new Project_API(this.http, this.base_url, this.employee_id)
		this.time_entry_api = new Time_Entry_API(this.http, this.base_url, this.employee_id)
	}

	public employee_id_set(id: number){

		this.employee_id = id
		this.project_api = new Project_API(this.http, this.base_url, this.employee_id)
		this.time_entry_api = new Time_Entry_API(this.http, this.base_url, this.employee_id)
	}

	public jwt_get(): string {
		return this.jwt
	}


	
}

export function parse_jwt<T>(token: string): T {
	if(!token || token === ""){ 
		throw new Error("now token to parse")
	}

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

export type Claims = {
	employeeId: number
}