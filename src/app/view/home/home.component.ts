import { Component, OnInit } from '@angular/core';
import { DataChild } from 'src/app/model/data_child';
import { DataParent } from 'src/app/model/data_parent';
import { TypeLangue } from 'src/app/model/type_langue';
import { TypeNiveau } from 'src/app/model/type_niveau';
import { TypeValue } from 'src/app/model/type_value';
import { User } from 'src/app/model/user';
import { GlobalService } from 'src/app/provider/global.service';
import { UserProviderService } from 'src/app/provider/user-provider.service';
import { UserRequestService } from 'src/app/request/user-request.service';
import { TranslateService } from 'src/app/translate/translate.service';
/* import { TranslateService } from '@ngx-translate/core'; */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nbreLang!: string;
  public btn_modal!: string;
  public supportedLanguages: any[] = [];
  public typeNiveau!:TypeNiveau;
  public typeValue!:TypeValue;
  public typeLang!:TypeLangue;
  public users:User[] =[];
  public selectNivoParler!:string;
  public selectNivoEcrit!:string;
  public selectNivoComp!:string;
  public selectLanguage!:string;
  public selectUser!:User;
  public isValide:boolean = false;
  public languesBD:string [] = [];
  public dataChild!:DataChild;
  public currentLangue!:string;

  constructor(private _translate: TranslateService, private userProvider:UserProviderService,private userRequest:UserRequestService,public global:GlobalService) { }

  ngOnInit(): void {
    this.fetchUsers();
    // set current langage
    this.selectLang('fr');

  }

  public fetchUsers(){
    this.userRequest.findAllUsers().subscribe(
      (res : User[]) =>{
        this.users = res;
        this.dataChild= new DataChild(this.users,this.typeNiveau);
        if(res.length > 0){
          // par defaut la variable selectUser doit pas etre null
          this.selectUser = res[0];
          // on charge les differentes langues distinte de la bd on vide aussi 
         

        }
      }
    );
  }

  public addUser(user :User){
    this.userRequest.saveUser(user).subscribe(
      (usr : User) => {
        this.users.push(usr);
        this.dataChild.users = this.users;
        if(!this.global.checkExiste(this.languesBD,usr.langue)){this.languesBD.push(usr.langue)}
      }
    );
  } 

  saveLang(){
    if(this.selectNivoParler != null && this.selectNivoEcrit != null && this.selectNivoComp != null && this.selectLanguage != null){
      console.log(this.selectLanguage);
      console.log(this.selectNivoComp);
      console.log(this.selectNivoEcrit);
      console.log(this.selectNivoParler);
      let usr = new User(this.selectLanguage,this.selectNivoParler,this.selectNivoEcrit,this.selectNivoComp);
      this.addUser(usr);
    }
   

  }

  deleteUser(){
    this.userRequest.deleteUser(this.selectUser.id).subscribe(
      (res:void)=>{
        console.log(this.selectUser.id);
        this.isValide = false;
        this.fetchUsers();
      }
    );
   
  }
  updateUser(){
    if(this.selectNivoParler != null && this.selectNivoEcrit != null && this.selectNivoComp != null && this.selectLanguage != null){
      let usr = new User(this.selectLanguage,this.selectNivoParler,this.selectNivoEcrit,this.selectNivoComp);
      usr.id = this.selectUser.id;
      this.userRequest.updateUser(usr).subscribe(
        res =>{
          this.isValide = false;
          this.fetchUsers();
        }
      );
    
    }

  }

  isCurrentLang(lang: string,code:string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;

}

selectLang(lang: string) {
    // choisir une langue;
    this._translate.use(lang);
    this.currentLangue = this._translate.currentLang;
    this.refreshText();
}

refreshText() {
    // refresh translation when language change
    this.nbreLang = this._translate.instant('nbr_lang');
    this.btn_modal = this._translate.instant('modal_close');
    this.typeNiveau = new TypeNiveau(this._translate);
    this.typeValue = new TypeValue(this._translate);
    this.typeLang = new TypeLangue(this._translate);
    this.dataChild = new DataChild(this.users,this.typeNiveau);
    this.fetchLang();
}

translateByCode(code:string){
  let res = this._translate.instant(code);
  return res;
}

fetchLang(){
  //this.supportedLanguages
  //list represente la liste des langues suporter par le systeme
  this.supportedLanguages = [];
  let list = [
    { display: this._translate.instant('arab_lang'), value: 'ar',key:'arab_lang' },
    { display: this._translate.instant('chn_lang'), value: 'zh',key:'chn_lang'},
    { display: this._translate.instant('ger_lang'), value: 'en',key:'ger_lang' },
    { display: this._translate.instant('lat_lang'), value: 'al',key:'lat_lang' },
    { display: this._translate.instant('spn_lang'), value: 'es',key:'spn_lang' },
  ];

  //supportedLanguages doit contenir uniquement les langue present ds la bd a defaut [en,fr,ger]
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

 

  
  public openSimpleModal():void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
  
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');  
      button.setAttribute('data-target','#exampleModal');
    container?.appendChild(button);
    button.click();
  }

  
  public openModal(mode:string,_user:User):void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    this.selectUser = _user;
    
    button.setAttribute('data-toggle','modal');  
    if(mode === 'modifier'){
      this.selectNivoParler = this.selectUser.nivoParler;
      this.selectNivoEcrit = this.selectUser.nivoEcrit;
      this.selectNivoComp = this.selectUser.nivoComprehension
      this.selectLanguage = this.selectUser.langue;
      this.isValide = true;
      button.setAttribute('data-target','#modal-modifier');

    }else if(mode === 'detail'){
      button.setAttribute('data-target','#modal-detail');

    }else if(mode === 'suprimer'){
      this.isValide = true;
      button.setAttribute('data-target','#modal-warning');

    }
    container?.appendChild(button);
    button.click();
  }

  addItem(parentData:DataParent){
    this.openModal(parentData.mode,parentData.user);

  }

 

}
