import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  private host:String="http://localhost:8080";

  constructor(private http: HttpClient) { }

  public saveUser(user:User) :Observable<User>{
    return this.http.post<User>(this.host+"/api/user/save",user);
  }

  public updateUser(user:User) :Observable<User>{
    return this.http.put<User>(this.host+"/api/user/update",user);
  }

  public findAllUsers() :Observable<User[]>{
    return this.http.get<User[]>(this.host+"/api/user/alls");
  }

  public deleteUser(id:number):Observable<void> {
    
    return this.http.delete<void>(this.host+"/api/user/delete/"+id);
  }

  
}
