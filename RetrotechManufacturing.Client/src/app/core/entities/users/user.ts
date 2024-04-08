import { IEntity } from "../base/entity";
import { Role } from "./role";

export interface IUser extends IEntity{
    role: Role;
    postalCode: string | undefined;
    name: string | undefined;
    city: string | undefined;
    countryOrRegion: string | undefined;
    email: string | undefined;
    stateProvince: string | undefined;
    streetAddress: string | undefined;
}