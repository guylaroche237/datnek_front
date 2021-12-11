import { Component, Input, OnInit } from '@angular/core';
import { DataParent } from 'src/app/model/data_parent';
import { Language } from 'src/app/model/language';
import { TranslateService } from 'src/app/translate/translate.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() dataModal!:DataParent; 
  public nullLanguage!:Language;

  constructor(private _translate: TranslateService) { }

  ngOnInit(): void {
    
  }

  
translateByCode(code:string){
  let res = this._translate.instant(code);
  return res;
}

public openModal():boolean{
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle','modal');  
  if(this.dataModal.mode === 'modifier'){
   // button.setAttribute('data-target','#modal-modifier');
  }else if(this.dataModal.mode === 'detail'){
    button.setAttribute('data-target','#modal-detail');

  }else if(this.dataModal.mode === 'suprimer'){
    button.setAttribute('data-target','#modal-warning');

  }
  container?.appendChild(button);
  button.click();
  return true;
}

public closeModal(mode:string){
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle','modal');
  if(mode == "detail"){
    button.setAttribute('data-target','#modal-detail');
  }else if(this.dataModal.mode == "suprimer"){
    button.setAttribute('data-target','#modal-warning');
  }else{
    // on ne fait rien
  }
  this.dataModal.language = this.nullLanguage;
  
  
  button.setAttribute('data-dismiss','modal');
  container?.appendChild(button);
  button.click();

}


}
