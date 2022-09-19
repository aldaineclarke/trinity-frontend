import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { CartItem } from '../Interfaces/cartItem';
import { Product } from '../Interfaces/product';
import { ProductService } from './product.service';
// import { ProductInterface } from '../interfaces/product';
// import { SidesInterface } from '../interfaces/sides';
// import { DataService } from './data.service';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    // constructor(private api: DataService, private dataService: DataService) {}

    /**
     * Converts the cart in `localStorage` to an array
     * @returns {CartItem[]} Cart from local storage as an array
     */
    constructor(private productService: ProductService){}

    getCart(): CartItem[] {
        if(!localStorage.getItem('cart')){
          localStorage.setItem('cart', JSON.stringify([]));
        }
        return JSON.parse(localStorage.getItem('cart') as string);
        
    }

    clearCart(): void {
        localStorage.setItem('cart', JSON.stringify([]));
    }

    /**
     * Inserts and item to the cart array
     * @param itemId An object that represents a product/cart item
     */
    addCartItem(item: CartItem): void {
        // Get all the products
        this.productService.getAllProduct().subscribe((response) => {
            let products = response.data;

            let currentCart: CartItem[] = [];

            // If `cart` is found in localStorage we store it in `currentCart`
            if (!!localStorage.getItem('cart')) {
                currentCart = this.getCart();
            }

            // Search for duplicate cart item
            let duplicateCartItem: CartItem|undefined = currentCart.find((cartItem: CartItem) => {
                    return cartItem.product._id == item.product._id
                }
            );

            // If duplicate cart item is found we increment the amount instead of inserting a new product to the cart
            if (duplicateCartItem) {
                let amt = duplicateCartItem.quantity;
                duplicateCartItem.quantity = amt + item.quantity;

            } else {
                // Finding the product being added to the cart
                // let product: ProductInterface|undefined = products.find(
                //     (product: any) => product.id == item.id
                // );

                // Add the product found to the cart with `amount` set to `1` if duplicate not found
                // This needs to be updated to accomodate the side orders
                currentCart.push(
                  item
                );
            }

            // Updating the cart in localStorage with the new information
            this.updateCart(currentCart);

            // Cart Notification function goes here
        });
    }

    /**
     * Removes and item from the cart using it's id
     * @param itemId The id of the product/cart item to be removed
     */
    removeCartItem(itemId: number): any[] {
        const cart = this.getCart();
        const productId = cart.findIndex(
            (cartItem: CartItem) => cartItem.id == itemId
        );

        cart.splice(productId, 1);
        this.updateCart(cart);

        return cart;
    }

    /**
     * Updates the cart in the `localStorage`
     * @param cart The array of objects you would like to be the new cartin storage
     */
    updateCart(cart: CartItem[]): void {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    getCartCount():number{
        return this.getCart().length ?? 0
    }

    updateCartItemQuantity(cartID:number, value:number){
        const cartItems = this.getCart();
        cartItems.forEach(item =>{
            if(item.id == cartID) {
                item.quantity = value;
                // item.totalPrice = this.getCartItemPrice(item);
            }
        });
        this.updateCart(cartItems);

    }

    getCartTotal(){
        const cart = this.getCart()

        let subTotal = cart.reduce((accumulator, item)=> accumulator += item.totalPrice * item.quantity, 0 )

        return subTotal;
    }
    getCartItemPrice(item:CartItem):number{
            return item.quantity * item.totalPrice;
    }


}