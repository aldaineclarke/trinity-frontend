import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';

const MaterialComponents = [
  MatButtonModule,
  MatDialogModule,
  MatTabsModule,
]

@NgModule({
  declarations: [],
  imports: [
    MaterialComponents,
    CommonModule,
    
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
