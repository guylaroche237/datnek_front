import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataForm } from 'src/app/model/data_form';
import { Language } from 'src/app/model/language';
import { LangueRequestService } from 'src/app/request/langue-request.service';
import { TranslateService } from 'src/app/translate/translate.service';


@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})
export class LanguageFormComponent implements OnInit {
  @Input() dataForm!:DataForm;
  @Output() dataEventForm:EventEmitter<Language[]> = new EventEmitter<Language[]>();
  languageForm!: FormGroup;
  submitted = false;
  //list:Language[] = [];
  public language!:Language;
  public nullLanguage:Language = new Language('','','','');
  
  


  constructor(private formBuilder: FormBuilder,private languageRequest:LangueRequestService,private _translate:TranslateService) { }

  ngOnInit(): void {
    this.languageForm = this.formBuilder.group({
      langue: ['', Validators.required],
      nivoParler: ['', Validators.required],
      nivoEcrit: ['', Validators.required],
      nivoComprehension: ['', [Validators.required]], 
  }, { });
  }

  get f() { return this.languageForm.controls; }
 

  onSubmit(){
    this.submitted = true;

    if (this.languageForm.invalid) {
      return;
    }
  
  if(this.dataForm.currentLang.id == null){
   // alert('-------- on save -------------');
    this.language = new Language(this.languageForm.value['langue'],this.languageForm.value['nivoParler'],this.languageForm.value['nivoEcrit'],this.languageForm.value['nivoComprehension']);
    this.sendData("save",this.language);
  }else{
    this.language = new Language(this.languageForm.value['langue'],this.languageForm.value['nivoParler'],this.languageForm.value['nivoEcrit'],this.languageForm.value['nivoComprehension']);
    this.language.id = this.dataForm.currentLang.id;
    this.sendData("update",this.language);
  }

  }

  onReset() {
    this.submitted = false;
    this.languageForm.reset();
}

isExiste(languages:Language[],lang:Language){
  let rep = false;
  for(let i = 0;i<languages.length;i++){
    if(languages[i].langue == lang.langue){
     // alert('TROUVER');
      rep = true;
      break;
    }
  }
  return rep;
}

sendData(methode:string,lang:Language){
  if(methode == 'save' && lang.id == null){
    this.languageRequest.isExiste(lang.langue).subscribe(
      (reponse:boolean) =>{
        if(reponse == false){
          this.languageRequest.saveLanguage(lang).subscribe(
            (res: Language) =>{
             this.languageRequest.findAllsLanguages().subscribe(
               (all : Language[]) => {
                this.dataEventForm.emit(all);  
               }
             );         
            }
          );
        }
      }
    );

  }else if(methode == 'update' && lang.id != null && this.dataForm.code == lang.langue){
      this.languageRequest.updateLanguage(lang).subscribe(
        (res : Language) =>{
          this.languageRequest.findAllsLanguages().subscribe(
            (lst :Language[])=>{
              this.dataEventForm.emit(lst);
            }
          );
  
        }
      );
   
     
  }
  this.onReset();
  this.dataForm.currentLang = this.nullLanguage;
}

  // donne la traduction en fonction du code du mot
  translateByCode(code:string){
    let res = this._translate.instant(code);
    return res;
  }

}
