import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserRequestService } from 'src/app/request/user-request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute,public userRequest:UserRequestService) { }
  public listUsers!:User[];

  ngOnInit(): void {
    this.fetchUsers();
    this.router.navigate(['home'],{relativeTo:this.route});
     
  }

  public fetchUsers(){
    this.userRequest.findAllUsers().subscribe(
      (res : User[]) =>{
        this.listUsers = res;
        
      }
    );
  }

}
