import { IEntity } from "../base/entity";
import { IProduct } from "../products/product";
import { IVehicle } from "./vehicle";

export interface IProductGroup extends IEntity{
    name: string;
    products: IProduct[];
    vehicles: IVehicle[];
}