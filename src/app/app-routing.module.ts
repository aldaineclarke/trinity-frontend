import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"admin",
    component:DashboardComponent,
    children:[
      // {
      //   path:"",
      //   component: Dashboard
      // }
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
