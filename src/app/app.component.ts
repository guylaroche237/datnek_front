import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './model/user';
import { UserProviderService } from './provider/user-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datnek';
  constructor(private router:Router,private userProvider:UserProviderService) { }

  public users!:User[];

  ngOnInit(): void {
    //au lancement de la page dirige vers dashboard
  //  this.userProvider.fetchUsers();
    this.router.navigateByUrl("/datnek");
   
  }



}
