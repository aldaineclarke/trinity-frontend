import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { APIResponse } from '../Interfaces/apiResponse';
import { Category } from '../Interfaces/category';
import { HandlerService } from './handler.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  ENDPOINT = BASE_URL+"/categories/";

  constructor(private _http: HttpClient, private handler:HandlerService) { }

  getAllCategory():Observable<APIResponse<Category[]>>{
    return this._http.get<APIResponse<Category[]>>(this.ENDPOINT)
    .pipe(
      catchError(this.handler.handleError)
    );
  }

  getSingleCategory(id: string):Observable<APIResponse<Category>>{
    return this._http.get<APIResponse<Category>>(this.ENDPOINT+id)
    .pipe(
      catchError(this.handler.handleError)
    );
  }

  createCategory(data:Partial<Category[]>):Observable<APIResponse<Category>>{
    return this._http.post<APIResponse<Category>>(this.ENDPOINT, data)
    .pipe(
      catchError(this.handler.handleError)
    );
  }

  updateCategory(id:string, data:Partial<Category>):Observable<APIResponse<Category>>{
    return this._http.patch<APIResponse<Category>>(this.ENDPOINT +id, data)
    .pipe(
      catchError(this.handler.handleError)
    );
  }
  deleteCategory(id:string):Observable<APIResponse<Category>>{
    return this._http.delete<APIResponse<Category>>(this.ENDPOINT+id)
    .pipe(
      catchError(this.handler.handleError)
    );
  }
}
