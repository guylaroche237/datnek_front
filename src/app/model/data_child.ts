import { TypeNiveau } from "./type_niveau";
import { User } from "./user";

export class DataChild{
    public users!:User[];
    public typeNivo!:TypeNiveau;
    constructor(user:User[],typ:TypeNiveau){
        this.users = user;
        this.typeNivo = typ;
    }
}