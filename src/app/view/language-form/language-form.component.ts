import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataForm } from 'src/app/model/data_form';
import { Language } from 'src/app/model/language';
import { LangueRequestService } from 'src/app/request/langue-request.service';


@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})
export class LanguageFormComponent implements OnInit {
  @Input() dataForm!:DataForm;
  @Output() dataEventForm:EventEmitter<Language[]> = new EventEmitter<Language[]>();
  languageForm!: FormGroup;
  languageFormUPD!: FormGroup;
  submitted = false;
  list:Language[] = [];
  public language!:Language;
  
  


  constructor(private formBuilder: FormBuilder,private languageRequest:LangueRequestService) { }

  ngOnInit(): void {
   
    this.languageForm = this.formBuilder.group({
      langue: ['', Validators.required],
      nivoParler: ['', Validators.required],
      nivoEcrit: ['', Validators.required],
      nivoComprehension: ['', [Validators.required]],
     
  }, {
      
  });
  this.languageRequest.findAllsLanguages().subscribe(
    res => {this.list = res;}
    
  );
  
  }

  refrechForm():boolean{

    this.languageForm = this.formBuilder.group({
      langue: [this.dataForm.currentLang.langue, Validators.required],
      nivoParler: [this.dataForm.currentLang.nivoParler, Validators.required],
      nivoEcrit: ['', Validators.required],
      nivoComprehension: ['', [Validators.required]],
     
  }, {
      
  });

  return true;

  }

  get f() { return this.languageForm.controls; }
 
  onSubmitUPD(){}

  onSubmit(){
    this.submitted = true;

    if (this.languageForm.invalid) {
      return;
    }
  
  if(this.dataForm.currentLang.langue == ""){
    this.language = new Language(this.languageForm.value['langue'],this.languageForm.value['nivoParler'],this.languageForm.value['nivoEcrit'],this.languageForm.value['nivoComprehension']);
  }else{
    this.language = new Language(this.languageForm.value['langue'],this.languageForm.value['nivoParler'],this.languageForm.value['nivoEcrit'],this.languageForm.value['nivoComprehension']);
    this.language.id = this.dataForm.currentLang.id;
  }
  console.log(this.language);
  //let language:Language = new Language(this.languageForm.value['langue'],this.languageForm.value['nivoParler'],this.languageForm.value['nivoEcrit'],this.languageForm.value['nivoComprehension']);
  
  if(this.isExiste(this.list,this.language)){
   this.sendData("update",this.language);
   this.languageForm.reset();
  }else{
    this.sendData("save",this.language);
    this.onReset();
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
      rep = true;
      break;
    }
  }
  return rep;
}

sendData(methode:string,lang:Language){
  if(methode == 'save'){
    this.languageRequest.saveLanguage(lang).subscribe(
      (res: Language) =>{
       this.list.push(res);
        this.dataEventForm.emit(this.list);
        
      }
    );

  }else{
    if(lang.id != null){
      this.languageRequest.updateLanguage(lang).subscribe(
        (res : Language) =>{
          this.languageRequest.findAllsLanguages().subscribe(
            (lst :Language[])=>{
              this.list = lst;
              this.dataEventForm.emit(this.list);
            }
          );
  
        }
      );
      this.onReset();
    }
   

  }
}

listenUpdate(lang:Language){
  alert(lang);
}

}
