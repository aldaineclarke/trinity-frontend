import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Interfaces/category';
import { Product } from 'src/app/Interfaces/pruduct';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // products = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
  products: Product[]=[];
  categories: Category[]=[];

  constructor(private productService: ProductService, private categoryService:CategoryService) { }

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
    this.categoryService.getAllCategory().subscribe({
      next:(res) =>{
        this.categories = res.data
        console.log(res.data);
        
      },
      error:(error) =>{
        console.log(error);
        
      }
    })
  }

}
