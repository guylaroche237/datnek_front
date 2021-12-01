import { TranslateService } from "../translate/translate.service";

export class TypeLangue{
    public francais!:string[];
    public anglais!:string[];
    public nerlandais!:string[];
    public allemand!:string[];
    public espagnol!:string[];
    public latin!:string[];
    public arabe!:string[];
    public chinois!:string[];

    constructor(public translate:TranslateService){
        this.francais = ["Fr_lang",this.translate.instant('Fr_lang')];
        this.anglais = ["eng_lang",this.translate.instant('eng_lang')];
        this.nerlandais = ["dsh_lang",this.translate.instant('dsh_lang')];
        this.allemand = ["ger_lang",this.translate.instant('ger_lang')];
        this.espagnol = ["spn_lang",this.translate.instant('spn_lang')];
        this.latin = ["lat_lang",this.translate.instant('lat_lang')];
        this.arabe = ["arab_lang",this.translate.instant('arab_lang')];
        this.chinois = ["chn_lang",this.translate.instant('chn_lang')];
    }


}