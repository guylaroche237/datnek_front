import { Inject, Injectable } from '@angular/core';
import { User } from '../model/user';
import { UserRequestService } from '../request/user-request.service';


@Injectable(
  {providedIn: 'root'}
)
export class UserProviderService {
  public users:User[] =[];

  constructor(private userRequest:UserRequestService) { }

  public get getUsers(){
    return this.users;
  } 


   public fetchUsers(){
    this.userRequest.findAllUsers().subscribe(
      (res : User[]) =>{
        this.users = res;
      }
    );
  }

  public addUser(user :User){
    this.userRequest.saveUser(user).subscribe(
      (usr : User) => {
        this.users.push(usr);
      }
    );
  } 
}
