import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CheckoutFormComponent } from 'src/app/Components/checkout-form/checkout-form.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  @ViewChild(CheckoutFormComponent) parentComponent !: any

  constructor() { }

  switch : boolean = false;
  email !: string;
  clientForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    phoneNum : new FormControl('', [Validators.required]),
    address : new FormControl('', [Validators.required]),
    note: new FormControl(''),
    plumber: new FormControl('', [Validators.required]),
    createdAt : new FormControl(new Date()),
  })

  get firstname(){
    return this.clientForm.get('firstname');
  }
  get lastname(){
    return this.clientForm.get('lastname');
  }
  get phoneNum(){
    return this.clientForm.get('phoneNum');
  }
  get address(){
    return this.clientForm.get('address');
  }
  get note(){
    return this.clientForm.get('note');
  }
  get plumber(){
    return this.clientForm.get('plumber');
  }

  ngOnInit(): void {
  }

  changeSwitch(){
    this.switch = !this.switch;
    alert(this.parentComponent.emailVal)
  }

  moveOn(){
    // access the stepper from the
    this.parentComponent.stepper.next();
    this.changeSwitch();
  }

}
