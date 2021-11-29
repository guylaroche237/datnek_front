import { Component, OnInit } from '@angular/core';
import { TypeNiveau } from 'src/app/model/type_niveau';
import { TypeValue } from 'src/app/model/type_value';
import { User } from 'src/app/model/user';
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
  public translatedText!: string;
  public btn_modal!: string;
  public supportedLanguages: any[] = [];
  public btn_update!:string;
  public btn_delete!:string;
  public btn_detail!:string;
  public typeNiveau!:TypeNiveau;
  public typeValue!:TypeValue;
  public users:User[] =[];
  public selectNivoParler!:string;
  public selectNivoEcrit!:string;
  public selectNivoComp!:string;
  public selectLanguage!:string;

  constructor(private _translate: TranslateService, private userProvider:UserProviderService,private userRequest:UserRequestService) { }

  ngOnInit(): void {
    this.supportedLanguages.push({ display: 'English', value: 'en' });
    this.supportedLanguages.push({ display: 'Español', value: 'es' });
    this.supportedLanguages.push({ display: '华语', value: 'zh' });
    this.supportedLanguages.push({ display: 'Deutch', value: 'al' });
    this.supportedLanguages.push({ display: 'Arabe', value: 'ar' });
    this.supportedLanguages.push({ display: 'Francais', value: 'fr' });
    this.fetchUsers();
   

      // set current langage
      this.selectLang('es');

  }

  public fetchUsers(){
    this.userRequest.findAllUsers().subscribe(
      (res : User[]) =>{
        this.users = res;
      }
    );
  }

  public addUser(user :User){
    this.userRequest.saveUser(user).subscribe(
      (usr : User) => {
        this.users.push(usr);
      }
    );
  } 

  saveLang(){
    if(this.selectNivoParler != null && this.selectNivoEcrit != null && this.selectNivoComp != null){
      let usr = new User(1,"Francais",this.selectNivoParler,this.selectNivoEcrit,this.selectNivoComp);
      this.addUser(usr);
      console.log(this.selectNivoParler);
      console.log(this.selectNivoComp);
      console.log(this.selectNivoEcrit);
    }
   

  }

  isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;
}

selectLang(lang: string) {
    // choisir une langue;
    this._translate.use(lang);
    this.refreshText();
}

refreshText() {
    // refresh translation when language change
    this.translatedText = this._translate.instant('hello world');
    this.btn_modal = this._translate.instant('modal_close');
    this.btn_update = this._translate.instant('update');
    this.btn_detail = this._translate.instant('detail');
    this.btn_delete = this._translate.instant('btn_delete');
    this.typeNiveau = new TypeNiveau(this._translate);
    this.typeValue = new TypeValue(this._translate);
}

  /* selectLanguage(lang:string){
    this.translateService.use(lang);
  } */

  
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

  
  public openModal(mode:string):void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');  
    if(mode === 'modifier'){
      button.setAttribute('data-target','#modal-modifier');

    }else if(mode === 'detail'){
      button.setAttribute('data-target','#modal-detail');

    }else if(mode === 'suprimer'){
      button.setAttribute('data-target','#modal-warning');

    }
    container?.appendChild(button);
    button.click();
  }

}
