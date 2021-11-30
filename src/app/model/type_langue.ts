import { TranslateService } from "../translate/translate.service";

export class TypeLangue{
    public francais!:string;
    public anglais!:string;
    public nerlandais!:string;
    public allemand!:string;
    public espagnol!:string;
    public latin!:string;
    public arabe!:string;
    public chinois!:string;

    constructor(public translate:TranslateService){
        this.francais = this.translate.instant('Fr_lang');
        this.anglais = this.translate.instant('eng_lang');
        this.nerlandais = this.translate.instant('dsh_lang');
        this.allemand = this.translate.instant('ger_lang');
        this.espagnol = this.translate.instant('spn_lang');
        this.latin = this.translate.instant('lat_lang');
        this.arabe = this.translate.instant('arab_lang');
        this.chinois = this.translate.instant('chn_lang');
    }


}