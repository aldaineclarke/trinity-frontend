import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-plumber',
  templateUrl: './plumber.component.html',
  styleUrls: ['./plumber.component.scss']
})
export class PlumberComponent implements OnInit {
  @ViewChild("editableForms") editForms!: ElementRef<HTMLElement>;

  constructor() { }

  editMode = false;

  ngOnInit(): void {
  }

  turnOnEditMode(){
    this.editMode = true;

  }

  turnOffEditMode(){
    this.editMode = false;
  }

  updatePlumber(){

    
  }
  getEditableData(){
    const inputs = this.editForms.nativeElement.querySelectorAll(".editMode input");
    const values = new Map();

    inputs.forEach((input, index)=>{
          if(index == 0) return;
          let inputElement = (input as HTMLInputElement);
          values.set(inputElement.name, inputElement.value);
    });
  }

}
