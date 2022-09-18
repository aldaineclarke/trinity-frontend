import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { DataService } from '../../Services/data.service';
// import { UserCreationComponent } from '../../Components/user-creation/user-creation.component';
// import { UserService } from '../../Services/user.service';
import { CartService } from '../../Services/cart.service';
import { CartItem } from '../../Interfaces/cartItem';
import { DOMAIN } from 'src/environments/environment';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
   
  cartItems: CartItem[] = [];
  base = DOMAIN;
  constructor(
    private router: Router,
    public dialog: MatDialog,
    // private dataService: DataService,
    // private userService: UserService,
    public cartService: CartService
  ) {}

  updateQuantity(cartID:number, value:number){
    this.cartService.updateCartItemQuantity(cartID, value);

    this.cartItems = this.cartService.getCart();

  }
  formatLabel(value: number) {
    if (value >= 8) {
      return Math.round(value / 7);
    }
    return value;
  }
  goBack(){
    window.history.back();
  }

  removeItem(id:number){
    this.cartService.removeCartItem(id);
    this.cartItems = this.cartService.getCart();
  }

  increaseQty(item:CartItem){
      this.cartService.updateCartItemQuantity(item.id,++item.quantity);
  }


  decreaseQty(item:CartItem){
    if(item.quantity-1 == 0){
      return this.removeItem(item.id);
    }
    this.cartService.updateCartItemQuantity(item.id,--item.quantity);
  }

 
  ngOnInit() {
    this.cartItems = this.cartService.getCart();
  
    this.cartService.updateCart(this.cartItems);

  }



  // Clear Cart
  clearItems() {
    this.cartService.clearCart();
  }
}

