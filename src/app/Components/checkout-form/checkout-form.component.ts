import { Component, Inject, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { CheckoutComponent } from 'src/app/Pages/checkout/checkout.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  // This is used to turn off the matstepper form when the login user form is active
  @ViewChild('stepper') stepper !: MatStepper;
  @Input('switchTrigger') switchTrigger : boolean = false;

  emailVal !: string;

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
    this.stepper.next();
  }else{
    this.stepper.next();
  }

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

  Swal.fire(
    {
      title:'Order Success!',
      text: 'Your order has been successfully.',
      icon: "success",
      customClass: {
        container: "swalContainer",
      },

    })

  }

  routeToCart(){
    Swal.fire(
      {
        title:'Order Cancelled!',
        text: 'Your order has been sucessfully cancelled',
        icon: "success",
        customClass: {
          container: "swalContainer",
        },

      })
    this.router.navigate(['/cart']);

  }

}
