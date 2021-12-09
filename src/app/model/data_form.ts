import { Language } from "./language";
import { TypeLangue } from "./type_langue";
import { TypeNiveau } from "./type_niveau";
import { TypeValue } from "./type_value";

export class DataForm{
    public value!:TypeValue;
    public lang!:TypeLangue;
    public label!:TypeNiveau;
    public languages!:Language[];
    
    constructor(val:TypeValue,lang:TypeLangue,label:TypeNiveau,langs:Language[]){
        this.value = val;
        this.lang = lang;
        this.label = label;
        this.languages = langs;
    }
}