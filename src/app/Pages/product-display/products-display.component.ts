import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductEditComponent } from 'src/app/Components/product-edit/product-edit.component';
import { Product } from 'src/app/Interfaces/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './products-display.component.html',
  styleUrls: ['./products-display.component.scss']
})
export class ProductDisplayComponent {

  constructor(private productService: ProductService, private dialog: MatDialog) { }

  products:Product[] = [];
  selectedProduct:Product | undefined = undefined;

  ngOnInit(): void {
    this.getAllProducts();
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


}
