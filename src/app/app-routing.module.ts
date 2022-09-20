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
import { CartPageComponent } from './Pages/cart-page/cart-page.component';
import { AuthGuard } from './Guards/auth.guard';
import { OrderAdminComponent } from './Pages/order-admin/order-admin.component';

const routes: Routes = [

  {
    path:"products",
    component: ProductsComponent,
  },
  {
    path:"cart",
    component: CartPageComponent
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
        component: OrderAdminComponent,
      },
      {
        path: "",
        redirectTo: "/admin/plumbers",
        pathMatch: "full"

      }
    ],
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
  },
  {
    path:"checkout",
    component:CheckoutComponent,
  },
  {
    path: "",
    redirectTo:"/products",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
