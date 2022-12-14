import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';

const MaterialComponents = [
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    TextFieldModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatPaginatorModule,
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
