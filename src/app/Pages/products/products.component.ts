import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // products = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
  products: Product[]=[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe({
      next:(res) => {
        this.products = res.data
        console.log(res.data);
        
      },
      error:(error) => {
        console.log(error);
        
      }
    })
  }

}
