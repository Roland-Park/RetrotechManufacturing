import { IEntity } from "../base/entity";
import { IProduct } from "../products/product";

export interface IPrice extends IEntity{
    unitAmount: number;
    currency: string;
    isPrimary: boolean;
    product: IProduct;
}