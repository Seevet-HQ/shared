export abstract class BaseModel {
  id!: number;
  uuid!: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;

  constructor(data?: Partial<BaseModel>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
