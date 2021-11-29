import { TranslateService } from "../translate/translate.service";


export class TypeValue{
    public courant!:string;
    public interim!:string;
    public preinterim!:string;
    public expert!:string;

    constructor(public translate:TranslateService){
        this.courant = translate.instant('courant');
        this.interim = translate.instant('niv_int');
        this.preinterim = translate.instant('niv_pre_int');
        this.expert = translate.instant('niv_exl');
    }
}