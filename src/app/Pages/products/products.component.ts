import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketEditComponent } from 'src/app/Components/ticket-edit/ticket-edit.component';
import { Category } from 'src/app/Interfaces/category';
import { Product } from 'src/app/Interfaces/product';
import { Service } from 'src/app/Interfaces/service';
import { Ticket } from 'src/app/Interfaces/ticket';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { TaskService } from 'src/app/Services/task.service';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // products = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
  products: Product[]=[];
  categories: Category[]=[];
  services:Service[] = [];
  selectedService !: Service;

  constructor(private productService: ProductService, private categoryService:CategoryService, private taskService:TaskService, private dialog:MatDialog, private ticketService : TicketService) { }

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

    this.getAllTasks();

  }

  getAllTasks() {
    this.taskService.getAllServices().subscribe((response)=>{
      this.services = response.data;
    })
  }

  openDialog(service:Service) {
    const dialogRef = this.dialog.open(TicketEditComponent, {
      width: '40%',
      minWidth:'400px',
      data: {
        service: service,
        blank:true
      }
      // data: this.selectedTicket
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
          this.createTicket(result);
        }
      
    })

  }

  createTicket(ticket:Partial<Ticket>){
    this.ticketService.createTicket(ticket).subscribe((response) => {

    })
  }
}

