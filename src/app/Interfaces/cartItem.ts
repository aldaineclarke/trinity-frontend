// import { ProductInterface } from "./product";

export interface CartItem{
    id:number;
    // product:ProductInterface,
    sides:number[],
    quantity:number,
    totalPrice: number,
}