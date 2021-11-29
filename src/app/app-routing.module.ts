import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  {path:"datnek",component:DashboardComponent,
   children:[
     {path:"home",component:HomeComponent},
   ]
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
