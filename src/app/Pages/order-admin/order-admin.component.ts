import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderEditComponent } from 'src/app/Components/order-edit/order-edit.component';
import { Order } from 'src/app/Interfaces/order';
import { Product } from 'src/app/Interfaces/product';
import { OrderService } from 'src/app/Services/order.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.scss']
})
export class OrderAdminComponent implements OnInit {

  constructor(private orderService: OrderService, private dialog: MatDialog, private productService: ProductService) { }
  products:Product[] = [];
  orders:Order[] = [];
  selectedOrder:Order | undefined = undefined;

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllOrders()
  }

  openDialog(id?: string): void {
    if(id){
      this.selectedOrder = this.orders.find((order)=>{
        return order._id == id
      }) as Order;
    }else{
      this.selectedOrder = undefined;
    }
    console.log(this.selectedOrder)
    const dialogRef = this.dialog.open(OrderEditComponent, {
      width: '40%',
      minWidth:'55vw',
      maxHeight:"80vh",
      data: this.selectedOrder
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(this.selectedOrder){
          this.updateOrder(result);
        }else{
          this.createOrder(result);
        }
      }
      
    });
  }

  getProductFromId(id:string){
    return this.products.find((product)=>{
      return product._id == id;
    })?.name;
  }
  createOrder(order:Partial<Order>){
      this.orderService.createOrder(order).subscribe(()=>{
        this.getAllOrders()
      })
    }

  updateOrder(data:Partial<Order>){
    this.orderService.updateOrder(data._id as string,data).subscribe(()=>{
      this.getAllOrders();
    });
  }
  getAllOrders(){
    this.orderService.getAllOrders().subscribe((response)=>{
      this.orders = response.data
      this.orders.forEach((element)=>{
        element.createdAt = new Date(element.createdAt);
      })
    })
  }
  getAllProducts(){
    this.productService.getAllProduct().subscribe((response)=>{
      this.products = response.data;
    })
  }
  deleteOrder(id: string){
    this.orderService.deleteOrder(id).subscribe(()=>{
      this.orders = this.orders.filter((order)=>{
        return order._id !== id;
      })
    })
  }

}
