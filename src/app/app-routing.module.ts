import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { HomeComponent } from './view/home/home.component';
import { UserDetailComponent } from './view/users/user-detail/user-detail.component';
import { UsersComponent } from './view/users/users.component';

const routes: Routes = [
  {path:"datnek",component:DashboardComponent,
   children:[
     {path:"home",component:HomeComponent},
     {path:"users",component:UsersComponent},
     {path:"users/:id",component:UserDetailComponent}
   ]
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
