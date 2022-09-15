import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material/material.module';
import { ProductModalComponent } from './Components/product-modal/product-modal.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PlumberComponent } from './Pages/plumber/plumber.component';
import { ProductComponent } from './Pages/product/product.component';
import { TicketComponent } from './Pages/ticket/ticket.component';
import { OrderComponent } from './Pages/order/order.component';
import { LoginComponent } from './Pages/login/login.component';

@NgModule({
  entryComponents:[ProductModalComponent],
  declarations: [
    AppComponent,
    ProductModalComponent,
    ProductCardComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    PlumberComponent,
    ProductComponent,
    TicketComponent,
    OrderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
