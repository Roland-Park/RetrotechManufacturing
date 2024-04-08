import { IEntity } from "../base/entity";

//cm and kg
export interface IDimensions extends IEntity{
    height: number;
    width: number;
    length: number;
    weight: number;
}