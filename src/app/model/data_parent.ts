import { User } from "./user";

export class DataParent{
    public user!:User;
    public mode!:string;

    constructor(usr:User,mode:string){
        this.user = usr;
        this.mode = mode;
    }
}