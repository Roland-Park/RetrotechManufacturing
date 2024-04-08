import { IEntity } from "../base/entity";
import { IProduct } from "./product";

export interface ICategory extends IEntity{
    name: string;
    products: IProduct[];
}