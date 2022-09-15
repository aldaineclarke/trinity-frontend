import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PlumberComponent } from './Pages/plumber/plumber.component';
import { ProductDisplayComponent } from './Pages/product/products-display.component';
import { TicketComponent } from './Pages/ticket/ticket.component';
import { OrderComponent } from './Pages/order/order.component';
import { LoginComponent } from './Pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    PlumberComponent,
    ProductDisplayComponent,
    TicketComponent,
    OrderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
