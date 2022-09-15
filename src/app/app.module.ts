import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material/material.module';
import { ProductModalComponent } from './Components/product-modal/product-modal.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';

@NgModule({
  entryComponents:[ProductModalComponent],
  declarations: [
    AppComponent,
    ProductModalComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
