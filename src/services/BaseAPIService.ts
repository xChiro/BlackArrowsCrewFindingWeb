export class BaseAPIService {
    protected readonly baseUrl: string;
    protected readonly token: string;

    constructor(token: string = "") {
        this.baseUrl = import.meta.env.VITE_APP_BASE_URL;
        this.token = token;
    }

    protected createHeaders(needsToken: boolean): Record<string, string> {
        const headers: Record<string, string>  = { "Content-Type": "application/json" };
        if (needsToken) headers["Authorization"] = `Bearer ${this.token}`;
        return headers;
    }

    protected async sendRequest<T>(method: string, endpoint: string, needsToken: boolean = true, body: object | null = null): Promise<T> {
        const headers = this.createHeaders(needsToken);
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: method,
            headers: headers,
            body: body ? JSON.stringify(body) : null
        });

        if(!response.ok) {
            let data;
            try {
                data = await response.json();
            } catch {
                data = {Message: 'No message provided'};
            }
            throw new Error(data.Message);
        }

        let responseData;

        try {
            responseData = await response.json();
        } catch {
            responseData = {} as T;
        }

        return responseData;
    }

    protected async postRequest<T>(endpoint: string, body: object): Promise<T> {
        return this.sendRequest<T>('POST', endpoint, true, body);
    }

    protected async getRequest<T>(endpoint: string, needsToken: boolean = true): Promise<T> {
        return this.sendRequest<T>('GET', endpoint, needsToken);
    }

    protected async putRequest<T>(endpoint: string, body?: object): Promise<T> {
        return this.sendRequest<T>('PUT', endpoint, true, body);
    }

    protected async deleteRequest<T>(endpoint: string): Promise<T> {
        return this.sendRequest<T>('DELETE', endpoint);
    }
}