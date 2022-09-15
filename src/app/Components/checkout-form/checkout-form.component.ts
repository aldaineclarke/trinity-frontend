import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  constructor() { }

   emailForm = new FormGroup({
    email : new FormControl('' , [Validators.required])
  });

  get email() {
    return this.emailForm.get('email');
  }

  cardForm = new FormGroup({
    cardType: new FormControl(),
    cardNumber : new FormControl('' , [Validators.required]),
    expiryDate : new FormControl(),
    cvv: new FormControl()
  });

  confirmForm = new FormGroup({
    confirm : new FormControl('')
  })

  ngOnInit(): void {
  }

  intializeForm(){

  }

}
