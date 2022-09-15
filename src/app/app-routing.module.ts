import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PlumberComponent } from './Pages/plumber/plumber.component';

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
