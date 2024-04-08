import { IEntity } from "../base/entity";
import { IOrderLineItem } from "./orderLineItem";
import { OrderStatus } from "./orderStatus";

export interface IOrder extends IEntity{
    items: IOrderLineItem[],
    total?: number;
    serialNumber: string;
    paymentIntentId: string;
    clientSecret: string;
    status: OrderStatus;
    userId: number | undefined;
    postalCode: string;
    city: string;
    countryOrRegion: string;
    email: string;
    stateProvince: string;
    streetAddress: string;
    cartId: number;
}