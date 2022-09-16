import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  plumForm = this.fb.group({ 
    email : ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" )]  ],
    // email : ['', [Validators.required,Validators.pattern("/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" )]  ],
    password : ['', Validators.required]
  



  })
  get createControl(){
    return this.plumForm.controls;
  }

  submit(){
    console.log(this.plumForm.value)
    
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
