import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {

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

  addToCart(item:any){
    this.cartService.addCartItem(item);
  }

}
