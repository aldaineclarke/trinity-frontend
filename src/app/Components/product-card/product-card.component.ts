import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { Product } from 'src/app/Interfaces/pruduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  
  @Input() public productsData!:Product;

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
    
  }
  
  ngOnChange(){
    console.log(this.productsData);

  }
  openDialog(prodDetails:Product) {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      width:'60%',
      data:prodDetails
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
