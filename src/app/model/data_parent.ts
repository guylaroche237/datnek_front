import { Language } from "./language";
import { User } from "./user";
// le model que le component child envoie au component parent
export class DataParent{
    public language!:Language;
    public mode!:string;

    constructor(lang:Language,mode:string){
        this.language = lang;
        this.mode = mode;
    }
}