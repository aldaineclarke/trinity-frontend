import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Plumber } from 'src/app/Interfaces/plumber';
import { Service } from 'src/app/Interfaces/service';
import { Ticket } from 'src/app/Interfaces/ticket';
import { TicketOptions } from 'src/app/Interfaces/ticketOptions';
import { PlumberService } from 'src/app/Services/plumber.service';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.scss']
})
export class TicketEditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: Partial<TicketOptions>, private plumberService: PlumberService, private taskService: TaskService) { }

  plumbers:Plumber[] =[];
  services:Service[] = [];


  ticketForm = new FormGroup({
    clientName: new FormControl('', [Validators.required]),
    clientEmail: new FormControl('', [Validators.required]),
    clientPhone: new FormControl('', [Validators.required]), 
    clientAddress: new FormControl('', [Validators.required]),
    service: new FormControl('', [Validators.required]),
    clientNote: new FormControl('', [Validators.required]),
    plumber: new FormControl('', [Validators.required]),
  })
  
  ngOnInit(): void {
    if(this.data.blank && this.data.service){
        this.ticketForm.get("service")?.setValue(this.data.service._id);
    }else if(this.data.ticket){
        if( this.data.blank) return
      this.setFormData();
    }

    this.getAllPlumbers();
    this.getAllServices();
  }
  
  
  setFormData(){

    this.ticketForm.setValue({
      clientName: this.data.ticket?.clientName,
      clientEmail: this.data.ticket?.clientEmail,
      clientAddress: this.data.ticket?.clientAddress,
      clientPhone: this.data.ticket?.clientPhone,
      service: this.data.ticket?.service,
      clientNote: this.data.ticket?.clientNote,
      plumber: this.data.ticket?.plumber,

    })
  }

  submitData(){
    return this.ticketForm.value;
  }
  getAllPlumbers(){
    this.plumberService.getAllPlumbers().subscribe((response)=>{
      this.plumbers = response.data;
    })
  }
  getAllServices(){
    this.taskService.getAllServices().subscribe((response)=>{
      this.services = response.data;
    })
  }
  

}
