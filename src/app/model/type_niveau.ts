import { TranslateService } from "../translate/translate.service";
// les diferents ty de niveau 
export class TypeNiveau{
    public nivoParler!:string;
    public nivoEcrit!:string;
    public nivoCompre!:string;
    public selectLang!:string;

    constructor(public translate:TranslateService){
        this.nivoParler = translate.instant('spk_level'); //niveau parler
        this.nivoEcrit = translate.instant('wri_level');// ecrit
        this.nivoCompre = translate.instant('com_level'); // compris
        this.selectLang = translate.instant('cho_lang'); // choisir langue
    }
}