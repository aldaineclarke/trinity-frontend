import { CartItem } from "./cartItem";
export interface Order{
    _id:string;
    email:string;
    total:string;
    items:CartItem[];
    createdAt:Date;
    status:string;
}