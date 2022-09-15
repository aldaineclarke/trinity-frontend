import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { OrderComponent } from './Pages/order/order.component';
import { PlumberComponent } from './Pages/plumber/plumber.component';
import { ProductComponent } from './Pages/product/product.component';
import { TicketComponent } from './Pages/ticket/ticket.component';

const routes: Routes = [
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
        component: ProductComponent,
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
