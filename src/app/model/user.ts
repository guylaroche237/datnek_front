
export class User{
    public id!:number;
    public langue!:string;
    public nivoParler!:string;
    public nivoEcrit!:string;
    public nivoComprehension!:string;

    constructor(id:number,langue:string,nivoParler:string,nivoEcrit:string,nivoCompre:string){
        this.id = id;
        this.langue = langue;
        this.nivoParler = nivoParler;
        this.nivoEcrit = nivoEcrit;
        this.nivoComprehension = nivoCompre;
    }
}