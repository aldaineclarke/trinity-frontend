import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LoginComponent } from './Pages/login/login.component';
import { OrderComponent } from './Pages/order/order.component';
import { PlumberComponent } from './Pages/plumber/plumber.component';
import { ProductDisplayComponent } from './Pages/product/products-display.component';
import { TicketComponent } from './Pages/ticket/ticket.component';

const routes: Routes = [

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
