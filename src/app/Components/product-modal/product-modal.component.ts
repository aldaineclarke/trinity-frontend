import { ProductService } from 'src/app/Services/product.service';
import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from 'src/app/Services/cart.service';
import { CartItem } from 'src/app/Interfaces/cartItem';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {

  cartItem!:CartItem;
  quantity = 1;
  total = this.data.price;
  constructor( @Inject(MAT_DIALOG_DATA) public data:any,
   private cartService:CartService,
   private matDialogRef:MatDialogRef<ProductModalComponent>
   ) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.matDialogRef.close()
  }
  check(){
    alert('pumpum')
  }

  add(){
    this.quantity++;
    this.total = this.data.price * this.quantity
    console.log(this.quantity + ' added');
    
  }
  minus(){
    if(this.quantity !== 1) {
      this.quantity--;
      this.total = this.data.price * this.quantity
      console.log(this.quantity + ' minus');
    }
  }

  addToCart(item:any){
    this.cartItem = {
      id:this.data._id,
      product:item,
      quantity:this.quantity,
      totalPrice: this.total,
    }
    this.cartService.addCartItem(this.cartItem);
    console.log(
      this.cartItem
    );
    
  }

}
