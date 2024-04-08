import { IEntity } from "../base/entity";
import { IPrice } from "../prices/price";

export interface ICartLineItem extends IEntity{
    cartId?: number;
    price: IPrice;
    quantity: number;
    priceId: number;
}