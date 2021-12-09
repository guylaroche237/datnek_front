import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  submitted = false;
  list:Language[] = [];

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

  get f() { return this.languageForm.controls; }


  onSubmit(){
    this.submitted = true;

    if (this.languageForm.invalid) {
      return;
    }
  let json = JSON.stringify(this.languageForm.value, null, 4);
  let language:Language = new Language(this.languageForm.value['langue'],this.languageForm.value['nivoParler'],this.languageForm.value['nivoEcrit'],this.languageForm.value['nivoComprehension']);
  
  if(this.isExiste(this.list,language)){
   this.sendData("update",language);
  }else{
    this.sendData("save",language);
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

}
