import { ICategory } from "./category";
import { IEntity } from "../base/entity";
import { IPicture } from "../pictures/picture";
import { IPrice } from "../prices/price";
import { IProductGroup } from "../productGroups/productGroup";
import { IDimensions } from "../productGroups/dimensions";

export interface IProduct extends IEntity{
    color: string | undefined;
    material: string | undefined;
    description: string;
    productGroup: IProductGroup;
    pictures: IPicture[];
    categories: ICategory[];
    prices: IPrice[];
    dimensions: IDimensions[];
    instructionsLink: string | undefined;
    filePath: string | undefined;
    displayName: string;
    isPhysical: boolean;
    assemblyRequired: boolean;
}