export default class ApiGetProductRequest {
    private _id?: number;
    private _name?: string;
    private _category?: string;
  
    public constructor() {
    }
  
    public set id(value: number|undefined) {
      this._id = value;
    }
  
    public set name(value: string|undefined) {
      this._name = value;
    }

    public set category(value: string|undefined) {
        this._category = value;
      }
  
    public convertParams() {
      return {
        params: {
          id: this._id,
          name: this._name,
          category: this._category
        }
      };
    }
  }
  