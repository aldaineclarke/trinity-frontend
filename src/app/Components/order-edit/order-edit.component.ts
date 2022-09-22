import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from 'src/app/Interfaces/order';
import { OrderService } from 'src/app/Services/order.service';
import { DOMAIN } from 'src/environments/environment';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: Partial<Order>, private orderService: OrderService) { }

  ORDER_STATUS = this.orderService.ORDER_STATUS;
  orderInfo = this.data;
  base = DOMAIN;
  ngOnInit(): void {
  }

}
