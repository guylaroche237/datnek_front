import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataChild } from 'src/app/model/data_child';
import { DataParent } from 'src/app/model/data_parent';
import { User } from 'src/app/model/user';
import { TranslateService } from 'src/app/translate/translate.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() data!:DataChild;
  @Output() newItemEvent:EventEmitter<DataParent> = new EventEmitter<DataParent>();
  public btn_update:string = 'update';
  public btn_detail = 'detail';
  public btn_delete = 'btn_delete';

  constructor(private _translate:TranslateService) { }

  ngOnInit(): void {
    
  }

  // donne la traduction en fonction du code du mot
translateByCode(code:string){
  let res = this._translate.instant(code);
  return res;
}

//envoi les infos du component fille au component parent
sendData(user:User,mode:string){
  let dataParent = new DataParent(user,mode);
  this.newItemEvent.emit(dataParent);
}

}
