import { Component, Input, OnInit } from '@angular/core';
import { Language } from 'src/app/model/language';
import { TranslateService } from 'src/app/translate/translate.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() languages!:Language[];
  public supportedLanguages: any[] = [];
  public modalButton:string = "modal_close"; 

  constructor(private _translate: TranslateService) { }

  ngOnInit(): void {
    this.supportedLanguages = [
      { display: this._translate.instant('Fr_lang'), value: 'fr' ,key:'Fr_lang'},
      { display: this._translate.instant('eng_lang'), value: 'en' ,key:'eng_lang'},
      { display: this._translate.instant('dsh_lang'), value: 'nr',key:'dsh_lang' },
      { display: this._translate.instant('arab_lang'), value: 'ar',key:'arab_lang' },
      { display: this._translate.instant('chn_lang'), value: 'zh',key:'chn_lang'},
      { display: this._translate.instant('ger_lang'), value: 'en',key:'ger_lang' },
      { display: this._translate.instant('lat_lang'), value: 'al',key:'lat_lang' },
      { display: this._translate.instant('spn_lang'), value: 'es',key:'spn_lang' },
    ];
  }

  selectLang(lang: Language) {
    // choisir une langue;
    this.supportedLanguages.forEach((elt) =>{
      if(lang.langue == elt.key){
        this._translate.use(elt.value);
      }
    });
   // this._translate.use(lang);
   // this.currentLangue = this._translate.currentLang;
  //  this.refreshText();
}

isCurrentLang(langue: Language) {
  // check if the selected lang is current lang
  let valueLangue:string = '';
  this.supportedLanguages.forEach((elt) =>{
    if(langue.langue == elt.key){
      valueLangue = elt.value;
    }
  });
  return valueLangue === this._translate.currentLang;

}

translateByCode(code:string){
  let res = this._translate.instant(code);
  return res;
}

}
