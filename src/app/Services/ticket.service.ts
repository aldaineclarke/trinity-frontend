import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { APIResponse } from '../Interfaces/apiResponse';
import { Ticket } from '../Interfaces/ticket';
import { HandlerService } from './handler.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  ENDPOINT = BASE_URL+"/tickets/";


  constructor(private _http: HttpClient, private handlers:HandlerService){ }


  getAllTickets():Observable<APIResponse<Ticket[]>> {
    return this._http.get<APIResponse<Ticket[]>>(this.ENDPOINT)
    .pipe(
      catchError(this.handlers.handleError)
    )
  }

  getTicketById(id:string):Observable<APIResponse<Ticket>>{
    return this._http.get<APIResponse<Ticket>>(this.ENDPOINT + id)
    .pipe(
      catchError(this.handlers.handleError)
    )
  }

  createTicket(data:Partial<Ticket>):Observable<APIResponse<Ticket>>{
    return this._http.post<APIResponse<Ticket>>(this.ENDPOINT, data)
    .pipe(
      catchError(this.handlers.handleError)
    )
  }

  updateTicket(id:string, data:Partial<Ticket>):Observable<APIResponse<Ticket>>{
    return this._http.patch<APIResponse<Ticket>>(this.ENDPOINT +id, data)
    .pipe(
      catchError(this.handlers.handleError)
    )
  }

  deleteTicket(id:string):Observable<APIResponse<Ticket>>{
    return this._http.delete(this.ENDPOINT+id)
    .pipe(
      catchError(this.handlers.handleError)
    )
  }
}
