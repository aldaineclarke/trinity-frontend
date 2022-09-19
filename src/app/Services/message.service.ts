import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  fire(title:string, html:string, icon: "error" | "success" | "info" | "warning" | "question"){
    Swal.fire(title, html, icon);
  }

}

