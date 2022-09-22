import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { APIResponse } from '../Interfaces/apiResponse';
import { Order } from '../Interfaces/order';
import { HandlerService } from './handler.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  ENDPOINT = BASE_URL+"/orders/";
  ORDER_STATUS = ["COMPLETED","CANCELLED","PENDING"];

  constructor(private _http: HttpClient, private handler:HandlerService) { }

  getAllOrders():Observable<APIResponse<Order[]>>{
    return this._http.get<APIResponse<Order[]>>(this.ENDPOINT)
    .pipe(
      catchError(this.handler.handleError)
    );
  }

  getSingleOrder(id: string):Observable<APIResponse<Order>>{
    return this._http.get<APIResponse<Order>>(this.ENDPOINT+id)
    .pipe(
      catchError(this.handler.handleError)
    );
  }

  createOrder(data:Partial<Order>):Observable<APIResponse<Order>>{
    return this._http.post<APIResponse<Order>>(this.ENDPOINT, data)
    .pipe(
      catchError(this.handler.handleError)
    );
  }

  updateOrder(id:string, data:Partial<Order>):Observable<APIResponse<Order>>{
    return this._http.patch<APIResponse<Order>>(this.ENDPOINT +id, data)
    .pipe(
      catchError(this.handler.handleError)
    );
  }
  deleteOrder(id:string):Observable<APIResponse<Order>>{
    return this._http.delete<APIResponse<Order>>(this.ENDPOINT+id)
    .pipe(
      catchError(this.handler.handleError)
    );
  }
}
