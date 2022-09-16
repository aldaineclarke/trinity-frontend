import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { APIResponse } from '../Interfaces/apiResponse';
import { Product } from '../Interfaces/product';
import { HandlerService } from './handler.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ENDPOINT = BASE_URL+"/products/";

  constructor(private _http: HttpClient, private handler:HandlerService) { }

  getAllProduct():Observable<APIResponse<Product[]>>{
    return this._http.get<APIResponse<Product[]>>(this.ENDPOINT)
    .pipe(
      catchError(this.handler.handleError)
    );
  }

  getSingleProduct(id: string):Observable<APIResponse<Product>>{
    return this._http.get<APIResponse<Product>>(this.ENDPOINT+id)
    .pipe(
      catchError(this.handler.handleError)
    );
  }

  createProduct(data:Partial<Product>):Observable<APIResponse<Product>>{
    return this._http.post<APIResponse<Product>>(this.ENDPOINT, data)
    .pipe(
      catchError(this.handler.handleError)
    );
  }

  updateProduct(id:string, data:Partial<Product>):Observable<APIResponse<Product>>{
    return this._http.patch<APIResponse<Product>>(this.ENDPOINT +id, data)
    .pipe(
      catchError(this.handler.handleError)
    );
  }
  deleteProduct(id:string):Observable<APIResponse<Product>>{
    return this._http.delete<APIResponse<Product>>(this.ENDPOINT+id)
    .pipe(
      catchError(this.handler.handleError)
    );
  }
}
