import { TranslateService } from "../translate/translate.service";

export class TypeNiveau{
    public nivoParler!:string;
    public nivoEcrit!:string;
    public nivoCompre!:string;
    public selectLang!:string;

    constructor(public translate:TranslateService){
        this.nivoParler = translate.instant('spk_level');
        this.nivoEcrit = translate.instant('wri_level');
        this.nivoCompre = translate.instant('com_level');
        this.selectLang = translate.instant('cho_lang');
    }
}