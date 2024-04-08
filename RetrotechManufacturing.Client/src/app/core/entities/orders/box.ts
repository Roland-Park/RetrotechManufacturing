import { IEntity } from "../base/entity";
import { IDimensions } from "../productGroups/dimensions";

export interface IBox extends IEntity{
    name: string;
    dimensions: IDimensions;
}