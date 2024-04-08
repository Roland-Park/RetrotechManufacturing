import { IEntity } from "../base/entity";
import { IPicture } from "../pictures/picture";

export interface ISponsor extends IEntity{
    name: string;
    target: number;
    currentTotal: number;
    description: string;
    pictures: IPicture[];
    clientSecret: string;
    paymentIntentId: string;
    minimumContribution: number;
}