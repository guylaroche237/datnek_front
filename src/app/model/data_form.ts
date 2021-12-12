import { Language } from "./language";
import { TypeLangue } from "./type_langue";
import { TypeNiveau } from "./type_niveau";
import { TypeValue } from "./type_value";

export class DataForm{
    public value!:TypeValue;
    public lang!:TypeLangue;
    public label!:TypeNiveau;
    public currentLang!:Language;
    public languages!:Language[];
    public code!:string;
    
    constructor(val:TypeValue,lang:TypeLangue,label:TypeNiveau,current:Language,languages:Language[],code:string){
        this.value = val;
        this.lang = lang;
        this.label = label;
        this.currentLang = current;
        this.languages = languages;
        this.code = code;
    }
}