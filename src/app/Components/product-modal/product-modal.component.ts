import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

  check(){
    alert('pumpum')
  }

}
