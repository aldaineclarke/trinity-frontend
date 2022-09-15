import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ProductModalComponent } from '../product-modal/product-modal.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  products = [1, 2, 3, 4, 5, 6];
  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
    // this.dialog.updateSize()
  }

  openDialog(index:any) {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      width:'60%',
      data:index
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
