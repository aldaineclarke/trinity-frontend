import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ticket } from 'src/app/Interfaces/ticket';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @ViewChild("editableForms") sourceTable!: ElementRef<HTMLElement>;

  createMode = false;
  editMode = false;
  tickets: Ticket[] = [];


  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
  }
  turnOnCreationMode(){
    this.createMode = true;
  }
  toggleCreationMode(){
    this.createMode = !this.createMode;
  }
  turnOffCreationMode(){
    this.createMode = false;
  }
  turnOnEditMode(){
    this.editMode = true;
  }

  turnOffEditMode(){
    this.editMode = false;
  }


  getEditableData(){
    const inputs = this.sourceTable.nativeElement.querySelectorAll(".editMode input");
    const values = new Map();

    inputs.forEach((input, index)=>{
          if(index == 0) return;
          let inputElement = (input as HTMLInputElement);
          values.set(inputElement.name, inputElement.value);
    });

    this.updateTicket(Object.fromEntries(values));
  }

  getCreationData(){
    const inputs = this.sourceTable.nativeElement.querySelectorAll(".createMode input");
    const values = new Map();

    inputs.forEach((input, index)=>{
          if(index == 0) return;
          let inputElement = (input as HTMLInputElement);
          values.set(inputElement.name, inputElement.value);
    });

    this.createTicket(Object.fromEntries(values));
  }

  deleteTicket(id:string){
    this.ticketService.deleteTicket(id).subscribe((response)=>{
      this.tickets = this.tickets.filter((ticket)=>{
        return ticket._id !== id;
      })
    })
  }

  
  updateTicket(data:Partial<Ticket>){
    this.ticketService.updateTicket(data._id as string,data).subscribe(()=>{
      this.editMode = false;
    });
  }

  createTicket(data:Partial<Ticket>){
    this.ticketService.createTicket(data).subscribe(()=>{
        this.createMode = false;
        this.getAllTickets();
    })
  }

  getAllTickets(){
    this.ticketService.getAllTickets().subscribe((response)=>{
      this.tickets = response.data
    })
  }

}
