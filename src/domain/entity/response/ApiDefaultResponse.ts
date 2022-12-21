import { AxiosResponse } from 'axios';
import ApiResponse from '@/domain/entity/response/ApiResponse';

export default class ApiDefaultResponse extends ApiResponse {
  public constructor(response: AxiosResponse) {
    super(response);
    if (this.status === 200) {
      this._contents = response.data;
    }
  }
}
