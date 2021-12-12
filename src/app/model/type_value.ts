import { TranslateService } from "../translate/translate.service";

// les differents chois pour les niveau
export class TypeValue{
  
    public values!:string[];

    constructor(public translate:TranslateService){
        this.values = ["courant","niv_int","niv_pre_int","niv_exl"];
    }
}