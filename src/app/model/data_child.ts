import { Language } from "./language";
import { TypeNiveau } from "./type_niveau";
import { User } from "./user";

// c est le model que le component parent envoi au comp child
export class DataChild{
    public languages!:Language[];
    public typeNivo!:TypeNiveau;
    constructor(languages:Language[],typ:TypeNiveau){
        this.languages = languages;
        this.typeNivo = typ;
    }
}