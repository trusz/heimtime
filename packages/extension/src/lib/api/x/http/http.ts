type Method = "GET" | "POST" | "PUT" | "DELETE"
export type JSON_Response<T> = Omit<Response, "body"> & { body: T }

export class HTTP {
    constructor (
        public jwt: string
    ) {}

    public async get<T>(url: string): Promise<JSON_Response<T>> {
        return await this.fetch<T>("GET", url)
    }

    public async delete<T>(url: string): Promise<JSON_Response<T>> {
        return await this.fetch<T>("DELETE", url)
    }

    public async post<T>(url: string, payload?: unknown): Promise<JSON_Response<T>> {
        return await this.fetch<T>("POST", url, payload)
    }

    public async put<T>(url: string, payload?: unknown): Promise<JSON_Response<T>> {
        return await this.fetch<T>("PUT", url, payload)
    }

    private Auth_Header (): string {
        return `Bearer ${this.jwt}`
    }

    private async fetch<T extends Record<string, unknown>>(method: Method, url: string, payload?: unknown): Promise<JSON_Response<T>> {
        let body: string | undefined
        if (payload !== undefined) {
            body = JSON.stringify(payload)
        }
        const resp = await fetch(url, {
            method,
            headers: {
                Authorization:  this.Auth_Header(),
                Accept:         "application/json",
                "content-type": "application/json;charset=UTF-8"
            },
            body
        })

        if (resp.status >= 400) {
            throw new Error(`fetch failed at url='${url}'`)
        }

        const body_text = await resp.text()
        let json_body = {}
        try {
            json_body = JSON.parse(body_text) as T
        } catch (err) {
            console.warn({ level: "error", msg: "fetch: could not parse response to json", err, body_text })
        }

        const typed_response = {
            ...resp,
            body: json_body
        }

        return typed_response
    }
}