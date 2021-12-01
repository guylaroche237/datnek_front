import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public checkExiste(list:string[],val:string): boolean{
    let rep:boolean = false;
    if(list.length > 0){
      for(let i = 0;i<list.length;i++){
        if(list[i].valueOf()===val.valueOf()){
          rep = true;
          break;
          
        }
      }
    }
    return rep;
  }
}
