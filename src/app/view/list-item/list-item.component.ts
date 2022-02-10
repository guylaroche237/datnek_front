import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataChild } from 'src/app/model/data_child';
import { DataParent } from 'src/app/model/data_parent';
import { Language } from 'src/app/model/language';
import { TypeNiveau } from 'src/app/model/type_niveau';
import { TranslateService } from 'src/app/translate/translate.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  
})
export class ListItemComponent implements OnInit {
  @Input() data!:any;
  @Output() dataEvent:EventEmitter<DataParent> = new EventEmitter<DataParent>();
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
sendData(language:Language,mode:string){
  let dataParent = new DataParent(language,mode);
  this.dataEvent.emit(dataParent);
}

}
