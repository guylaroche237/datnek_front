import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataChild } from 'src/app/model/data_child';
import { DataParent } from 'src/app/model/data_parent';
import { TranslateService } from 'src/app/translate/translate.service';


@Component({
  selector: 'app-list-language',
  templateUrl: './list-language.component.html',
  styleUrls: ['./list-language.component.css']
})
export class ListLanguageComponent implements OnInit {

  @Input() data! :DataChild;
  @Output() dataEvent:EventEmitter<DataParent> = new EventEmitter<DataParent>();
  
  constructor(private _translate:TranslateService) { }

  ngOnInit(): void {
  }

  
  // donne la traduction en fonction du code du mot
translateByCode(code:string){
  let res = this._translate.instant(code);
  return res;
}

receveData(dataParent:DataParent){
  this.dataEvent.emit(dataParent);

}

}
