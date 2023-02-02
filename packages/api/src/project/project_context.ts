import { writable, Writable, derived, Readable, get } from "svelte/store"
import { getContext, setContext } from "svelte"
import { Project } from "./project"
import { Task } from "./task"


const store_projects: Writable<Project[]> = writable([])


const project_context = {
	store_projects,
	create_task,
	create_project,
	add_project,
}
type Project_Context = typeof project_context
const context_key = {}

export function init_project_context(){
	setContext<Project_Context>(context_key, project_context)
}

export function use_project_context(){
	const ctx = getContext<Project_Context>(context_key)
	if(!ctx){
		console.warn({level:"warn", msg:"project context has not been initalized"})
	}
	return ctx
}


// 
// 
// 

function create_task(id: number, name: string): Task {
	return {
		id,
		name,
	}
}


function create_project(id:number, name:string, tasks: Task[] = []): Project {
	return {
		id,
		name,
		tasks,
	}
}

function add_project(...new_projects: Project[]) {

	const projects = get(store_projects)
	store_projects.set([...projects, ...new_projects])
}
