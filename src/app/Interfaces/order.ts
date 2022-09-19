import { CartItem } from "./cartItem";
export interface Order{
    _id:string;
    email:string;
    total:string;
    products:CartItem[];
    createdAt:string;
}