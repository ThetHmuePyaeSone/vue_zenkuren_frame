export class Product {
    public constructor(
      private readonly _id: string,
      private readonly _name: string,
      private readonly _category: string
    ) {}
  
    public get id(): string {
      return this._id;
    }
  
    public get name(): string {
      return this._name;
    }
  
    public get category(): string {
      return this._category;
    }
  }
  