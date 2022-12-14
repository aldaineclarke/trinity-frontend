import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class HandlerService {

  constructor() {

   }


  handleSuccess(){

  }

  handleError(error: any, source$?:Observable<any>){
    let message = "";
    let reason = "";

    console.log(error)
    if(typeof error === 'string'){
      message = error;
      reason = "Server Error"
    }else if(error instanceof HttpErrorResponse){
        if(error.error){
          message = error.error.error;
          reason = "Authentication Error";
        }else{
          switch(error.statusText){
            case "Not Found":
                message = "Url requested has not been found";
                reason = "Server Error"
                break;
            
            case "Internal Server Error": 
                message = error.error.message;
                reason = "Internal Server error";
                break;
  
            default:
              message = "An error occured when making a request to the server",
              reason = "Server Error"
          }
        }
       
    }else if(typeof error === "object"){
        if(error.message){
          message = error.message;
          reason = "Server Error"
        }
    }


    Swal.fire(
      {
        title:reason,
        text: message,
        icon: "error",
        customClass: {
          container: "swalContainer",
        },

      })

    return throwError(new Error(message));
  }
}
