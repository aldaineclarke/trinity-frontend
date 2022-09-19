import { Product } from "./product";

export interface Order{
    _id:string;
    email:string;
    total:string;
    products:Product[];
    createdAt:string;
}