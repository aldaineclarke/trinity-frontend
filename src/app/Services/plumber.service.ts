import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from "../../environments/environment"
import { APIResponse } from '../Interfaces/apiResponse';
import { Plumber } from '../Interfaces/plumber';
@Injectable({
  providedIn: 'root'
})
export class PlumberService {

  ENDPOINT = BASE_URL+"/plumbers/";

  constructor(private _http: HttpClient) { }

  getAllPlumbers():Observable<APIResponse<Plumber[]>>{
    return this._http.get<APIResponse<Plumber[]>>(this.ENDPOINT);
  }

  getSinglePlumber(id: string):Observable<APIResponse<Plumber>>{
    return this._http.get<APIResponse<Plumber>>(this.ENDPOINT+id);
  }

  createPlumber(data:Partial<Plumber[]>):Observable<APIResponse<Plumber>>{
    return this._http.post<APIResponse<Plumber>>(this.ENDPOINT, data);
  }

  updatePlumber(id:string, data:Partial<Plumber>):Observable<APIResponse<Plumber>>{
    return this._http.patch<APIResponse<Plumber>>(this.ENDPOINT +id, data);
  }
  deletePlumber(id:string):Observable<APIResponse<Plumber>>{
    return this._http.delete<APIResponse<Plumber>>(this.ENDPOINT+id);
  }
}
