import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  plumForm = this.fb.group({ 
    email : ['', Validators.required],
    password : ['', Validators.required]
  



  })

  submit(){
    console.log(this.plumForm.value)
    
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
