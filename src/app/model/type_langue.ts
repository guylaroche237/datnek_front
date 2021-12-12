import { TranslateService } from "../translate/translate.service";

// represente les differentes langue disponible 
export class TypeLangue{
 
    public values!:string[];

    constructor(public translate:TranslateService){
     
        this.values = ["Fr_lang","eng_lang","dsh_lang","ger_lang","spn_lang","lat_lang","arab_lang","chn_lang"];
    }


}