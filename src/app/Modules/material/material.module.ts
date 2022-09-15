import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';

const MaterialComponents = [
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents,
    MatDialogModule
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
