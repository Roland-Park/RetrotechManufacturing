import { IEntity } from "../base/entity";
import { ICartLineItem } from "./cartLineItem";

export interface ICart extends IEntity{
    items: ICartLineItem[];
    editedBy?: string;
    createdUtc?: Date;
    clientSecret?: string | undefined;
    paymentIntentId?: string | undefined;
    userId: number | undefined;
}