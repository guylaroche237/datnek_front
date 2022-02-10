
import {Injectable, Inject} from '@angular/core';
import { User } from '../model/user';


@Injectable()
export class UserService {
    private users!:User[];
    private _currentLang!: string;

    /* public get currentLang() {
        return this._currentLang;
    }

    // inject our translations
    constructor() {
    }

    public get getUsers(){
        return this.users;
      }
    
      public addUser(user:User){
        this.users.push(user);
      } */
} 