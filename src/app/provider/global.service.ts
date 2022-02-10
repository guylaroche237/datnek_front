import { Injectable } from '@angular/core';
import { TranslateService } from '../translate/translate.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private _translate:TranslateService) { }

  translateByCode(code:string){
    let res = this._translate.instant(code);
    return res;
  }

}
