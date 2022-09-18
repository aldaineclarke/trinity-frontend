import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, tap } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { APIResponse } from '../Interfaces/apiResponse';
import { Admin } from '../Interfaces/user';
import { HandlerService } from './handler.service';

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient, private handler: HandlerService) { }

  private ENDPOINT = BASE_URL+"/admin/";

    /**
   * ### Description
   * Checks the localStorage to see if there is a token present. If there is a token, retrieve the token and check if the token has expired using the jwtHelper.
   */
     public isAuthenticated = ():boolean =>{
      const token = localStorage.getItem('token') as string;
      
      return !jwtHelper.isTokenExpired(token);
  }

  public getUser = () =>{
    const token = localStorage.getItem("token") as string;
    return jwtHelper.decodeToken(token);
  }

  login(data:{username:string,password:string}){
    return this._http.post<APIResponse<{token:string, admin:Admin}>>(this.ENDPOINT+"login", data)
    .pipe(
      tap((response)=>{
          console.log(response.data);
          this.setToken(response.data.token);
      }),
      catchError(this.handler.handleError)
    )
  }

  setToken(token:string){
    localStorage.setItem("token", token);
  }
}
