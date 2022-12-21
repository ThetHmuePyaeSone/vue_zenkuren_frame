import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

export default class Client {
    private readonly apiClient: AxiosInstance;

    public constructor(baseUrl: string, headers: AxiosRequestHeaders = {'Content-type': 'application/json'}) {
        if (import.meta.env.DEV) {
            headers.Prefer = 'example=example-1';
          }
          this.apiClient = axios.create({
            baseURL: baseUrl,
            headers,
          });
    }

    public call(config: AxiosRequestConfig): AxiosPromise {
        return this.apiClient(config)
    }

    public get(url: string, config?: AxiosRequestConfig<any> | undefined): AxiosPromise {
        return this.apiClient.get(url, config);
    }
    
    public patch(url: string, data: any, config?: AxiosRequestConfig<any> | undefined): AxiosPromise {
        return this.apiClient.patch(url, data, config);
    }
    
    public post(url: string, data: any, config?: AxiosRequestConfig<any> | undefined): AxiosPromise {
        return this.apiClient.post(url, data, config);
    }
    
    public put(url: string, data: any, config?: AxiosRequestConfig<any> | undefined): AxiosPromise {
        return this.apiClient.put(url, data, config);
    }
}