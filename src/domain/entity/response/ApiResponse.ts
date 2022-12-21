import { AxiosResponse } from 'axios';

export default abstract class ApiResponse {
  protected readonly _status: number;

  protected _contents: any;

  protected constructor(response: AxiosResponse) {
    this._status = response.status;
    this._contents = null;
  }

  public get status(): number {
    return this._status;
  }

  public get contents(): any {
    return this._contents;
  }
}
