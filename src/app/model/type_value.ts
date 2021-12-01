import { TranslateService } from "../translate/translate.service";


export class TypeValue{
    public courant!:string[];
    public interim!:string[];
    public preinterim!:string[];
    public expert!:string[];

    constructor(public translate:TranslateService){
        this.courant = ["courant",translate.instant('courant')];
        this.interim = ["niv_int",translate.instant('niv_int')];
        this.preinterim = ["niv_pre_int",translate.instant('niv_pre_int')];
        this.expert = ["niv_exl",translate.instant('niv_exl')];
    }
}