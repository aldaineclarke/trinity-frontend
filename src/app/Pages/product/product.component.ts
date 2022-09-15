import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @ViewChild("editableForms") editForms!: ElementRef<HTMLElement>;

  // constructor(private productService) { }

  // products = [];

  // editMode = false;

  // ngOnInit(): void {
  // }

  // turnOnEditMode(){
  //   this.editMode = true;

  // }

  // turnOffEditMode(){
  //   this.editMode = false;
  // }

  // updateProduct(data:Partial<Plumber>){
  //   this.productService.updateProduct(data._id as string,data).subscribe(()=>{
  //     this.editMode = false;
  //   });
  // }
  // getEditableData(){
  //   const inputs = this.editForms.nativeElement.querySelectorAll(".editMode input");
  //   const values = new Map();

  //   inputs.forEach((input, index)=>{
  //         if(index == 0) return;
  //         let inputElement = (input as HTMLInputElement);
  //         values.set(inputElement.name, inputElement.value);
  //   });

  //   this.updateProduct(Object.fromEntries(values));
  // }

  // getAllProducts(){
  //   this.productService.getAllPlumbers().subscribe((response)=>{
  //     this.products = response.data;
  //   })
  // }
  // deleteProduct(id: string){
  //   this.productService.deletePlumber(id).subscribe(()=>{
  //     this.products = this.products.filter((product)=>{
  //       return product._id !== id;
  //     })
  //   })
  // }


}
