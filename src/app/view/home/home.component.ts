import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { DataChild } from 'src/app/model/data_child';
import { DataForm } from 'src/app/model/data_form';
import { DataNavbar } from 'src/app/model/data_nav_bar';
import { DataParent } from 'src/app/model/data_parent';
import { Language } from 'src/app/model/language';
import { TypeLangue } from 'src/app/model/type_langue';
import { TypeNiveau } from 'src/app/model/type_niveau';
import { TypeValue } from 'src/app/model/type_value';
import { User } from 'src/app/model/user';
import { GlobalService } from 'src/app/provider/global.service';
import { UserProviderService } from 'src/app/provider/user-provider.service';
import { LangueRequestService } from 'src/app/request/langue-request.service';
import { UserRequestService } from 'src/app/request/user-request.service';
import { TranslateService } from 'src/app/translate/translate.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public typeNiveau!:TypeNiveau;
 // public typeValue!:TypeValue;
 // public typeLang!:TypeLangue;
  public dataChild!:DataChild;
  public currentLangue!:string;
  public data !:DataForm;
  public languages:Language[] = [];
  public currentLang!:Language;
  public modalData!:DataParent;
  public isActive:boolean = false;

  constructor(private _translate: TranslateService, private userProvider:UserProviderService,private userRequest:UserRequestService,public global:GlobalService,private languageService:LangueRequestService) { }

  ngOnInit(): void {
   // this.fetchUsers();
    this.findAllsLanguages();
    // set current langage
    this.selectLang('fr');

  }
 

  public findAllsLanguages():Language[]{
    this.languageService.findAllsLanguages().subscribe(
      (res : Language[]) =>{

        this.languages = res; 
        this.dataChild= new DataChild(this.languages,this.typeNiveau);
        //this.refreshText();
      //  this.dataNavBar = new DataNavbar(this.languages,false);
        this.data = new DataForm(new TypeValue(this._translate),new TypeLangue(this._translate),new TypeNiveau(this._translate),new Language('','','',''),this.dataChild.languages,'');
       
        console.log(this.data);
      }
    );
    return this.languages;
  }


selectLang(lang: string) {
    // choisir une langue;
    this._translate.use(lang);
    this.currentLangue = this._translate.currentLang;
    this.refreshText();
}

refreshText() {
    
    this.typeNiveau = new TypeNiveau(this._translate);
 //   this.typeValue = new TypeValue(this._translate);
  //  this.typeLang = new TypeLangue(this._translate);
    this.dataChild = new DataChild(this.languages,this.typeNiveau);
    this.data = new DataForm(new TypeValue(this._translate),new TypeLangue(this._translate),new TypeNiveau(this._translate),new Language('','','',''),this.dataChild.languages,'');
}

translateByCode(code:string){
  let res = this._translate.instant(code);
  return res;
}
  

  receveData(parentData:DataParent){
    this.data = new DataForm(new TypeValue(this._translate),new TypeLangue(this._translate),new TypeNiveau(this._translate),parentData.language,this.dataChild.languages,parentData.language.langue);
    //alert(parentData.mode);
    this.modalData = parentData;
    if(parentData.mode == "detail"){
      this.isActive = true;
    }

  }

  receveDataFormulaire(langs:Language[]){
    this.languages = langs;
    this.dataChild = new DataChild(langs,this.typeNiveau);
  }

  receveDataDetailModal(data:any){
    let mode:string = data['mode'];
    if(mode == 'detail'){
      this.isActive = false;
    }else{
      this.languages = data['languages'];
      this.dataChild = new DataChild(data['languages'],this.typeNiveau);
    }
  }
}
