import { IEntity } from "../base/entity";
import { ICartLineItem } from "../carts/cartLineItem";
import { IPrice } from "../prices/price";

export interface IOrderLineItem extends IEntity{
    quantity: number;
    priceId: number;
    price: IPrice
}

export class OrderLineItem implements IOrderLineItem{
    id: number;
    quantity: number;
    priceId: number;
    price: IPrice;

    constructor(cartItem: ICartLineItem){
        this.id = 0;
        this.quantity = cartItem.quantity;
        this.priceId = cartItem.priceId;
    }
}