import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ticket } from 'src/app/Interfaces/ticket';
import { TicketService } from 'src/app/Services/ticket.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TicketEditComponent } from 'src/app/Components/ticket-edit/ticket-edit.component';

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
  selectedTicket!: Ticket | undefined;


  constructor(private ticketService: TicketService, public dialog: MatDialog) { }

  openDialog(id?: string): void {
    let setBlank = false
    if(id){
      this.selectedTicket = this.tickets.find((ticket)=>{
        return ticket._id == id
      }) as Ticket;
    }else{
      setBlank = true;
    }
    console.log(this.selectedTicket)
    const dialogRef = this.dialog.open(TicketEditComponent, {
      width: '40%',
      minWidth:'400px',
      data: {
        ticket:this.selectedTicket,
        blank: setBlank
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(Object.keys(result).length > 0){

        if(this.selectedTicket){
          this.updateTicket(result);
        }else{
          this.createTicket(result);
        }
        this.getAllTickets();
      }
    });
  }


  ngOnInit(): void {
    this.getAllTickets();
  }
  deleteTicket(id:string){
    this.ticketService.deleteTicket(id).subscribe((response)=>{
      this.tickets = this.tickets.filter((ticket)=>{
        return ticket._id !== id;
      })
    })
  }

  
  updateTicket(data:Partial<Ticket>){
    if(this.selectedTicket?._id){
      this.ticketService.updateTicket(this.selectedTicket._id as string,data).subscribe(()=>{
        this.getAllTickets();
      });

    }
  }

  createTicket(data:Partial<Ticket>){
    this.ticketService.createTicket(data).subscribe(()=>{
      this.getAllTickets();
    });
  }

  getAllTickets(){
    this.ticketService.getAllTickets().subscribe((response)=>{
      this.tickets = response.data
    })
  }

}
