import { User } from "src/app/model/user";

export namespace UsersAction{

    export class SaveUser{
        static readonly type = '[AddUser api] Add User';
        constructor(public user:User){}
    }

    export class UpdateUser{
        static readonly type = '[PutUser api] Update User';
        constructor(public user:User){}

    }

    export class AllUsers{
        static readonly type = '[AllUser api] Get User';
        constructor(){}
    }
    export class DeleteUser{
        static readonly type = '[DeleteUser api] Remove User';
        constructor(public id:number){}
    }

    export class GetUserById{
        static readonly type = '[GetUser api] Get User';
       // constructor(public id:number){}
        constructor(public user:User){}
    }
}