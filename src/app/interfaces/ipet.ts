import { ICategory } from "./icategory";

export interface IPet {
    id: number;
    category: ICategory;
    name: string;
    photoUrls: string[];
    tags: string[];
    status: string;
}
