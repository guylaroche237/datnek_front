import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Select, Selector, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { DataChild } from 'src/app/model/data_child';
import { DataParent } from 'src/app/model/data_parent';
import { User } from 'src/app/model/user';
import { UsersAction } from 'src/app/ngxs/users/users.action';
import { UserState } from 'src/app/ngxs/users/users.state';
import { TranslateService } from 'src/app/translate/translate.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit ,OnDestroy{
  @Input() data!:DataChild;
  @Output() newItemEvent:EventEmitter<DataParent> = new EventEmitter<DataParent>();
  @Select(UserState.getListUsers) users!:Observable<User[]>;
  @Select(UserState.getUserLoaded) userLoaded$!:Observable<boolean>;
  private loadedSubscription: Subscription = new Subscription();

  constructor(private _translate:TranslateService,private store:Store) { }

  ngOnInit(): void {
    this.loadedSubscription.add(
      this.loadUsers()
    ); 
  }

  loadUsers(){
    this.userLoaded$.subscribe((loaded) =>{
      if(loaded){

      }else{
        this.store.dispatch(new UsersAction.AllUsers());
      }
    });
    
  }

  // donne la traduction en fonction du code du mot
translateByCode(code:string){
  let res = this._translate.instant(code);
  return res;
}

//envoi les infos du component fille au component parent
sendData(user:User,mode:string){
 // let dataParent = new DataParent(user,mode);
 // this.newItemEvent.emit(dataParent);
}

ngOnDestroy(): void {
    this.loadedSubscription.unsubscribe();
}

}
