import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plumber } from 'src/app/Interfaces/plumber';
import { PlumberService } from 'src/app/Services/plumber.service';

@Component({
  selector: 'app-plumber',
  templateUrl: './plumber.component.html',
  styleUrls: ['./plumber.component.scss']
})
export class PlumberComponent implements OnInit {
  @ViewChild("editableForms") sourceTable!: ElementRef<HTMLElement>;

  constructor(private plumberService: PlumberService) { }

  editMode = false;
  createMode = false;
  plumbers:Plumber[] = []; 

  ngOnInit(): void {
    this.getAllPlumbers();
  }

  turnOnCreationMode(){
    this.createMode = true;
  }
  toggleCreationMode(){
    this.createMode = !this.createMode;
  }
  turnOffCreationMode(){
    this.createMode = false;
  }
  turnOnEditMode(){
    this.editMode = true;
  }

  turnOffEditMode(){
    this.editMode = false;
  }

  updatePlumber(data:Partial<Plumber>){
    this.plumberService.updatePlumber(data._id as string,data).subscribe(()=>{
      this.editMode = false;
    });
  }

  createPlumber(data:Partial<Plumber>){
    this.plumberService.createPlumber(data).subscribe(()=>{
        this.createMode = false;
        this.getAllPlumbers();
    })
  }
  getEditableData(){
    const inputs = this.sourceTable.nativeElement.querySelectorAll(".editMode input");
    const values = new Map();

    inputs.forEach((input, index)=>{
          if(index == 0) return;
          let inputElement = (input as HTMLInputElement);
          values.set(inputElement.name, inputElement.value);
    });

    this.updatePlumber(Object.fromEntries(values));
  }

  getCreationData(){
    const inputs = this.sourceTable.nativeElement.querySelectorAll(".createMode input");
    const values = new Map();

    inputs.forEach((input, index)=>{
          if(index == 0) return;
          let inputElement = (input as HTMLInputElement);
          values.set(inputElement.name, inputElement.value);
    });

    this.createPlumber(Object.fromEntries(values));
  }

  getAllPlumbers(){
    this.plumberService.getAllPlumbers().subscribe((response)=>{
      this.plumbers = response.data;
    })
  }
  deletePlumber(id: string){
    this.plumberService.deletePlumber(id).subscribe(()=>{
      this.plumbers = this.plumbers.filter((plumber)=>{
        return plumber._id !== id;
      })
    })
  }

}
