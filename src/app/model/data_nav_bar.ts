import { Language } from "./language";

export class DataNavbar{
    public languages!:Language[];
    public isActive!:boolean;

    constructor(lang:Language[],isActiv:boolean){
        this.languages = lang;
        this.isActive = isActiv;
    }
}