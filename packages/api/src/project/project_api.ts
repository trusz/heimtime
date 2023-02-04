import { date_format_iso } from "../x/date";
import { HTTP } from "../x/http";
import { Project } from "./project";
import { Task } from "./task";

export class Project_API {
	constructor(
		public http: HTTP,
		public base_url: string,
	){}

	private static API_URL = "employees/29/projects"

	async fetch_projects(date: Date): Promise<Project[]>{
		const url = this.url_projects(date)
		const resp = await this.http.get<Response_Project>(url)
		const projects = projects_from_response(resp.body)

		return projects
	}

	private url_projects(date: Date): string {
		const url = new URL(Project_API.API_URL, this.base_url)
		url.searchParams.set("date",date_format_iso(date))
		return url.toString()
	}
}


type Response_Project = {
	projects: {
		id:number, 
		name: string,
		tasks: {
			id: number,
			name: string,
		}[],
	}[]
}

function projects_from_response(resp: Response_Project): Project[] {
	const projects: Project[] = []
	
	for(let p of resp.projects){		
		const new_project: Project = {
			id: p.id,
			name: p.name,
			tasks: [],
		} 
		for(let t of p.tasks){
			const new_task: Task = {
				id: t.id,
				name: t.name,
			}
			new_project.tasks.push(new_task)
		}
		projects.push(new_project)
	}
	return projects
}