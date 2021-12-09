import { TranslateService } from "../translate/translate.service";

// les differents chois pour les niveau
export class TypeValue{
    public courant!:string[];
    public interim!:string[];
    public preinterim!:string[];
    public expert!:string[];

    constructor(public translate:TranslateService){
        this.courant = ["courant",translate.instant('courant')]; // courant
        this.interim = ["niv_int",translate.instant('niv_int')]; // intermediaire
        this.preinterim = ["niv_pre_int",translate.instant('niv_pre_int')]; // pre intermediaire
        this.expert = ["niv_exl",translate.instant('niv_exl')]; // excelent
    }
}