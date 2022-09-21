import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { HandlerService } from 'src/app/Services/handler.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private fb: FormBuilder, private authService: AuthService, private messageService: HandlerService, private router: Router) { }
  
  ngOnInit(): void {
  }


  plumForm = this.fb.group({ 
    email : ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" )]  ],
    // email : ['', [Validators.required,Validators.pattern("/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" )]  ],
    password : ['', Validators.required]

  })

  get createControl(){
    return this.plumForm.controls
  }

  submit(){
    console.log(this.plumForm.value);
    this.authService.login(this.plumForm.value).subscribe(()=>{
      // this.messageService.handleSuccess();
      this.router.navigate(['/admin/plumbers'])
    });
    
  }

}