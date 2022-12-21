import { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import Client from '@/util/Client';
import ApiResponse from '@/domain/entity/response/ApiResponse';

export default class V2Api {
  private readonly token: string;
  private readonly client: Client;

  constructor(base_url: string, header?: AxiosRequestHeaders) {
    this.client = new Client(base_url, header);
  }

  async getUser<T extends ApiResponse>(type: { new (response: AxiosResponse): T }, config?: AxiosRequestConfig|undefined): Promise<T> {
    const tokenWithConfig = this.addTokenToParams(config);
    const response = await this.client.get("/users", tokenWithConfig);
    return new type(response);
  }

  async getUserById<T extends ApiResponse>(id,type: { new (response: AxiosResponse): T }, config?: AxiosRequestConfig|undefined): Promise<T> {
    const tokenWithConfig = this.addTokenToParams(config);
    const response = await this.client.get(`users/${id}`, tokenWithConfig);
    return new type(response);
  }

  async putProduct<T extends ApiResponse>(type: { new (response: AxiosResponse): T }, data: AxiosRequestConfig<any>|undefined, config?: AxiosRequestConfig|undefined): Promise<T> {
    const tokenWithConfig = this.addTokenToParams(config);
    const response = await this.client.post("/product", data, tokenWithConfig);
    return new type(response);
  }
  

  private addTokenToParams(config?: AxiosRequestConfig|undefined):  AxiosRequestConfig{
    if (config) {
      config.params.token = this.token;
    } else {
      config = {
        params: {
          token: this.token
        }
      }
    }
    return config;
  }
}
