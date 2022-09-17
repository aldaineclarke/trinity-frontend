import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { APIResponse } from '../Interfaces/apiResponse';
import { Service } from '../Interfaces/service';
import { HandlerService } from './handler.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  ENDPOINT = BASE_URL+"/services/";

  constructor(private _http: HttpClient, private handler:HandlerService) { }

  getAllServices():Observable<APIResponse<Service[]>>{
    return this._http.get<APIResponse<Service[]>>(this.ENDPOINT)
    .pipe(
      catchError(this.handler.handleError)
    );
  }

  getSingleService(id: string):Observable<APIResponse<Service>>{
    return this._http.get<APIResponse<Service>>(this.ENDPOINT+id)
    .pipe(
      catchError(this.handler.handleError)
    );
  }

  createService(data:Partial<Service>):Observable<APIResponse<Service>>{
    return this._http.post<APIResponse<Service>>(this.ENDPOINT, data)
    .pipe(
      catchError(this.handler.handleError)
    );
  }

  updateService(id:string, data:Partial<Service>):Observable<APIResponse<Service>>{
    return this._http.patch<APIResponse<Service>>(this.ENDPOINT +id, data)
    .pipe(
      catchError(this.handler.handleError)
    );
  }
  deleteService(id:string):Observable<APIResponse<Service>>{
    return this._http.delete<APIResponse<Service>>(this.ENDPOINT+id)
    .pipe(
      catchError(this.handler.handleError)
    );
  }
}
