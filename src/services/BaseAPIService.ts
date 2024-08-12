export class BaseAPIService {
    protected readonly baseUrl: string;
    protected readonly token: string;
    protected readonly userId: string;

    constructor(token: string = "", userId: string = "") {
        this.userId = userId;
        this.baseUrl = import.meta.env.VITE_APP_BASE_URL;
        this.token = token;
    }

    protected async sendRequest<T>(method: string, endpoint: string, needsToken: boolean = true, body: object | null = null): Promise<T> {
        const headers = this.createHeaders(needsToken);
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: method,
            headers: headers,
            body: body ? JSON.stringify(body) : null
        });

        if(!response.ok) {
            throw new Error(response.status.toString());
        }

        let responseData;

        try {
            responseData = await response.json();
        } catch {
            responseData = {} as T;
        }

        return responseData;
    }

    protected createHeaders(needsToken: boolean): Record<string, string> {
        const headers: Record<string, string>  = { "Content-Type": "application/json" };
        if (needsToken) headers["Authorization"] = `Bearer ${this.token}`;
        if (this.userId) headers["x-ms-client-principal-id"] = this.userId;
        return headers;
    }

    protected async postRequest<T>(endpoint: string, body?: object): Promise<T> {
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