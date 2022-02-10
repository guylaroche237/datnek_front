
export class User{
    public id!:number;
    public nom!:string;
    public prenom!:string;
    public image!:string;
    public poste!:string;
    public dateNaiss!:string;
    public dateCrea!:string;

    constructor(nom:string,prenom:string,image:string,poste:string,dateNaiss:string){
        let dateNow:Date = new Date();
        
        this.nom = nom;
        this.prenom = prenom;
        this.image = image;
        this.poste = poste;
        this.dateNaiss = dateNaiss;
        this.dateCrea = dateNow.toLocaleDateString()
    }
}