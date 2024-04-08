import { IEntity } from "../base/entity";

export interface IPicture extends IEntity{
    url: string;
    alt: string;
}