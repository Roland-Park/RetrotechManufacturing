import { IEntity } from "../base/entity";

export interface IRequest extends IEntity{
    name: string;
    likeCount: number;
}