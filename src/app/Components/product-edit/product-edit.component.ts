import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/Interfaces/category';
import { Product } from 'src/app/Interfaces/product';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  categories:Category[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) private data: Partial<Product>, private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    if(this.data){
      this.setFormData();
    }
    this.getCategories();
  }

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]), 
    category: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    quantity: new FormControl(0, [Validators.required]),
    rating: new FormControl(5, [Validators.required]),
  })


  setFormData(){

    this.productForm.setValue({
      name: this.data.name,
      image: this.data.image,
      description: this.data.description,
      category: this.data.category,
      price: this.data.price,
      quantity: this.data.quantity,
      rating: this.data.rating,

    })
  }
  submitData(){
    return this.productForm.value;
  }

  getCategories(){
    this.categoryService.getAllCategory().subscribe((response)=>{
      this.categories = response.data;
    })
  }
 

}

