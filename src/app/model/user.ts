
export class User{
    public id!:number;
    public langue!:string;
    public nivoParler!:string;
    public nivoEcrit!:string;
    public nivoComprehension!:string;

    constructor(langue:string,nivoParler:string,nivoEcrit:string,nivoCompre:string){
        
        this.langue = langue;
        this.nivoParler = nivoParler;
        this.nivoEcrit = nivoEcrit;
        this.nivoComprehension = nivoCompre;
    }
}