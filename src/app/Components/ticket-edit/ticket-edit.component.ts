import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from 'src/app/Interfaces/ticket';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.scss']
})
export class TicketEditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: Partial<Ticket>) { }

  ngOnInit(): void {
    if(this.data){
      
      this.setFormData();
    }
  }

  ticketForm = new FormGroup({
    clientName: new FormControl('', [Validators.required]),
    clientEmail: new FormControl('', [Validators.required]),
    clientPhone: new FormControl('', [Validators.required]), 
    clientAddress: new FormControl('', [Validators.required]),
    service: new FormControl('', [Validators.required]),
    clientNote: new FormControl('', [Validators.required]),
    plumber: new FormControl('', [Validators.required]),
  })


  setFormData(){

    this.ticketForm.setValue({
      clientName: this.data.clientName,
      clientEmail: this.data.clientEmail,
      clientAddress: this.data.clientAddress,
      clientPhone: this.data.clientPhone,
      service: this.data.service,
      clientNote: this.data.clientNote,
      plumber: this.data.plumber,

    })
  }
  submitData(){
    return this.ticketForm.value;
  }
  

}
