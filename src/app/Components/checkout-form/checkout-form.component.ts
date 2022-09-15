import { Component, Inject, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CheckoutComponent } from 'src/app/Pages/checkout/checkout.component';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  constructor(@Inject(CheckoutComponent) private parent: CheckoutComponent) { }

  // This is used to turn off the matstepper form when the login user form is active
  @ViewChild('stepper') stepper !: MatStepper;
  @Input('switchTrigger') switchTrigger : boolean = false;

  emailVal !: string;

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

  findUser(){
    this.emailVal = this.emailForm.value.email;

    if(this.emailForm.valid){
      if(this.emailVal == 'bob'){
        this.stepper.next();

      }else{
       this.parent.changeSwitch();

      }
    }

  }

}
