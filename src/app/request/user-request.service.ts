import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  private host:String="http://localhost:3000";

  constructor(private http: HttpClient) { }

  public saveUser(user:User) :Observable<User>{
    return this.http.post<User>(this.host+"/users",user);
  }

  public updateUser(user:User) :Observable<User>{
    return this.http.put<User>(this.host+"/users/"+user.id,user);
  }

  public findAllUsers() :Observable<User[]>{
    return this.http.get<User[]>(this.host+"/users");
  }

  public deleteUser(id:number):Observable<void> {
    return this.http.delete<void>(this.host+"/users/"+id);
  }

  public findUserById(id:number):Observable<User>{
    return this.http.get<User>(this.host+"/users/"+id);
  }

 /*  public isExiste(langue:string):Observable<boolean>{
    return this.http.get<boolean>(this.host+"/existe/"+langue);
  } */

  
}
