import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LoginComponent } from './Pages/login/login.component';
import { OrderComponent } from './Pages/order/order.component';
import { PlumberComponent } from './Pages/plumber/plumber.component';
import { ProductsComponent } from './Pages/products/products.component';
import { ProductDisplayComponent } from './Pages/product-display/products-display.component';
import { TicketComponent } from './Pages/ticket/ticket.component';

const routes: Routes = [
  {
    path: "", 
    component: ProductsComponent
  },
  {
    path:"products",
    component: ProductsComponent,
  },
  {
    path:"admin/login",
    component: LoginComponent
  },
  {
    path:"admin",
    component:DashboardComponent,
    children:[

      {
        path:"plumbers",
        component: PlumberComponent,
      },
      {
        path:"products",
        component: ProductDisplayComponent,
      },
      {
        path:"tickets",
        component: TicketComponent,
      },
      {
        path:"orders",
        component: OrderComponent,
      },
      {
        path: "",
        redirectTo: "/admin/plumbers",
        pathMatch: "full"

      }
    ]
  },
  {
    path:"checkout",
    component:CheckoutComponent,
  },
  {
    path: "",
    redirectTo:"/admin",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
