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
import { ProductDisplayComponent } from './Pages/product/products-display.component';
import { TicketComponent } from './Pages/ticket/ticket.component';
import { OrderComponent } from './Pages/order/order.component';
import { LoginComponent } from './Pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CheckoutFormComponent } from './Components/checkout-form/checkout-form.component';
import { MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';


@NgModule({
  entryComponents:[ProductModalComponent],
  declarations: [
    AppComponent,
    ProductModalComponent,
    ProductCardComponent,
    FooterComponent,
    HeaderComponent,
    CheckoutFormComponent,
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
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    {
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' }
  },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
