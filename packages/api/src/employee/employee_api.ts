import { HTTP, JSON_Response } from "../x/http";
import { Employee } from "./employee";

export class Employee_API {
	constructor(
		public http: 		HTTP,
		public base_url: 	string,
	){
		this.api_url= `employees`
	}
	private api_url:string

	public async fetch_employee(emp_id: number): Promise<Employee>{
		const url = this.url_employee(emp_id)
		let resp: JSON_Response<Response_Employee>
		try{
			resp = await this.http.get<Response_Employee>(url)
		}catch(err){
			throw err
		}
		
		const emp = employee_from_response(resp.body)
		return emp
	}

	private url_employee(emp_id: number): string {
		const api_path = [this.api_url, emp_id].join("/")
		const url = new URL(api_path, this.base_url)
		return url.toString()
	}
}


type Response_Employee = {
	id: number,
	firstName: string,
	lastName: string,
}

function employee_from_response(resp: Response_Employee): Employee {
	const emp = new Employee({
		id: resp.id,
		first_name: resp.firstName,
		last_name: resp.lastName,
	})

	return emp;
}