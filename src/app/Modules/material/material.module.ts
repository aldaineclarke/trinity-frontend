import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

const MaterialComponents = [
   MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDialogModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents,

  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
