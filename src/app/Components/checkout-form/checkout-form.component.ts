import { Component, Inject, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/Interfaces/cartItem';
import { Order } from 'src/app/Interfaces/order';
import { CartService } from 'src/app/Services/cart.service';
import { MessageService } from 'src/app/Services/message.service';
import { OrderService } from 'src/app/Services/order.service';
import { DOMAIN } from 'src/environments/environment';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  constructor(
    private router : Router,
    public cartService: CartService,
    private messageService: MessageService,
    private orderService: OrderService
  ) { }

  // This is used to turn off the matstepper form when the login user form is active
  @ViewChild('stepper') stepper !: MatStepper;
  @Input('switchTrigger') switchTrigger : boolean = false;

  cartItems:CartItem[] = [];
  orderInfo!:Order;
  emailVal !: string;
  base = DOMAIN;

   emailForm = new FormGroup({
    email : new FormControl('' , [Validators.required, Validators.email])
  });

  get email() {
    return this.emailForm.get('email');
  }

  cardForm = new FormGroup({
    cardType: new FormControl('' , [Validators.required]),
    cardNumber : new FormControl(null , [Validators.required, Validators.minLength(16)]),
    expiryDate : new FormControl('' , [Validators.required]),
    cvv: new FormControl('' , [Validators.required ,  Validators.minLength(3), Validators.maxLength(16)])
  });

  get cardType() {
    return this.cardForm.get('cardType');
  }
  get cardNumber() {
    return this.cardForm.get('cardNumber');
  }
  get expiryDate() {
    return this.cardForm.get('expiryDate');
  }
  get cvv() {
    return this.cardForm.get('cvv');
  }

  confirmForm = new FormGroup({
    confirm : new FormControl('')
  })

  ngOnInit(): void {
      this.getCartItems();
  }

  checkCardType(){
  let card = this.cardForm.value.cardType.trim().toLowerCase();

  if(card == "paypal"){
    this.cardForm.setValue({
      cardType: "paypal",
      cardNumber :0,
      expiryDate :new Date,
      cvv: 0
    })
  }
  this.createOrder().subscribe({
    next:(response)=>{
      this.orderInfo = response.data;

      this.stepper.next();
    },
    error:(error)=>{
      this.messageService.fire("Order Failed",error.error, "error")
    }
  })

  }

  confirmOrder(){
  let summaryDets = {
    email : this.emailForm.value.email.trim().toLowerCase(),
    cardType: this.cardForm.value.cardType.trim().toLowerCase(),
    cardNumber : this.cardForm.value.cardNumber,
    expiryDate : this.cardForm.value.expiryDate,
    cvv: this.cardForm.value.cvv
  }

  if(summaryDets.cardType == "visa"){
    console.log(summaryDets);
  }

  if(summaryDets.cardType == "paypal"){

    console.log('Paypal' + JSON.stringify(summaryDets));
  }

    this.messageService.fire("Order Success!","Your order has been sucessfully","success");

  }

  routeToCart(){
    this.messageService.fire("Order Cancelled!","Your order has been sucessfully cancelled","success");
    this.router.navigate(['/cart']);

  }
  createOrder(){
    let order = {
      email:"tester@testing.com",
      items: this.cartItems,
    }
    console.log(order);
    return this.orderService.createOrder(order)
  }

  getCartItems(){
   this.cartItems = this.cartService.getCart();
  }

}
