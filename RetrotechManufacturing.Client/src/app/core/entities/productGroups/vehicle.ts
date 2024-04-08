import { IEntity } from "../base/entity";
import { IProductGroup } from "./productGroup";

export interface IVehicle extends IEntity{
    make: string;
    model: string;
    year: string;
    name: string;
    groups: IProductGroup[];
}