import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductEditComponent } from 'src/app/Components/product-edit/product-edit.component';
import { Category } from 'src/app/Interfaces/category';
import { Product } from 'src/app/Interfaces/product';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { BASE_URL, DOMAIN } from 'src/environments/environment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './products-display.component.html',
  styleUrls: ['./products-display.component.scss']
})
export class ProductDisplayComponent {

  constructor(private productService: ProductService, private dialog: MatDialog, private categoryService: CategoryService) { }
  base = DOMAIN;
  products:Product[] = [];
  categories: Category[] = [];
  selectedProduct:Product | undefined = undefined;

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories()
  }

  openDialog(id?: string): void {
    if(id){
      this.selectedProduct = this.products.find((product)=>{
        return product._id == id
      }) as Product;
    }else{
      this.selectedProduct = undefined;
    }
    console.log(this.selectedProduct)
    const dialogRef = this.dialog.open(ProductEditComponent, {
      width: '40%',
      minWidth:'400px',
      data: this.selectedProduct
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(this.selectedProduct){
          this.updateProduct(result);
        }else{
          this.createProduct(result);
        }
      }
      
    });
  }

  getCategoryNameFromId(id:string){
    return this.categories.find((category)=>{
      return category._id == id;
    })?.name;
  }
  createProduct(product:Partial<Product>){
      this.productService.createProduct(product).subscribe(()=>{
        this.getAllProducts()
      })
    }

  updateProduct(data:Partial<Product>){
    this.productService.updateProduct(data._id as string,data).subscribe(()=>{
      this.getAllProducts()
    });
  }
  getAllProducts(){
    this.productService.getAllProduct().subscribe((response)=>{
      this.products = response.data;
    })
  }
  deleteProduct(id: string){
    this.productService.deleteProduct(id).subscribe(()=>{
      this.products = this.products.filter((product)=>{
        return product._id !== id;
      })
    })
  }

  getAllCategories(){
    this.categoryService.getAllCategory().subscribe((response)=>{
      this.categories = response.data
    })
  }


}
