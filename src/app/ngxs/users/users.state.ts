import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { User } from "src/app/model/user";
import { UserRequestService } from "src/app/request/user-request.service";
import { UsersAction } from "./users.action";
import { tap } from "rxjs/operators";

interface StateModelUser{
    users:User[],
    count:number,
    user:User,
    userLoaded:boolean
}

@State<StateModelUser>({
    name: "User",
    defaults:{
        users:[],
        count:0,
        userLoaded:false,
        user:null!
    }
})

@Injectable()
export class UserState{
    constructor(private userService:UserRequestService){}
    
    @Selector()
    static getListUsers(state:StateModelUser){
        return state.users;
    }
    
    @Selector()
    static getCountUsers(state:StateModelUser){
        return state.count;
    }
    
    @Selector()
    static getCurrentUser(state:StateModelUser){
        return state.user;
    }
    
    @Selector()
    static getUserLoaded(state:StateModelUser){
        return state.userLoaded;
    }
    
    @Action(UsersAction.SaveUser)
    saveUser({getState,setState}:StateContext<StateModelUser>,action:UsersAction.SaveUser){
        const state = getState();
        return this.userService.saveUser(action.user).pipe(tap((usr) =>{
            const list = [...state.users!];
            list.push(usr);
            setState({
                ...state,
                users:list,
                count:list.length,
                
            });
        }))

    }
    
    @Action(UsersAction.UpdateUser)
    updateUser({getState,setState}:StateContext<StateModelUser>,action:UsersAction.UpdateUser){
        const state = getState();
        return this.userService.updateUser(action.user).pipe(tap((usr) =>{
            const list = [...state.users!];
            const userIndex = list.findIndex(item => item.id === action.user.id);
            list[userIndex] = usr;
            setState({
                ...state,
                users:list
            });
        }))
    }

    @Action(UsersAction.AllUsers)
    getAllUsers({getState,setState}:StateContext<StateModelUser>,action:UsersAction.AllUsers){
        const state = getState();
        return this.userService.findAllUsers().pipe(tap((lst) =>{
            setState({
                ...state,
                users:lst,
                userLoaded:true,
                count:lst.length
            });
        }))
        
    }


    @Action(UsersAction.DeleteUser)
    deleteUser({getState,setState}:StateContext<StateModelUser>,action:UsersAction.DeleteUser){
        const state = getState();
        return this.userService.deleteUser(action.id).pipe(tap(() =>{
           // const state = getState();
            const filteredArray = state.users!.filter(item => item.id !== action.id);
            setState({
                ...state,
                users:filteredArray,
                count:filteredArray.length
            });
        }));

    }

    @Action(UsersAction.GetUserById)
    getUserById({getState,setState}:StateContext<StateModelUser>,action:UsersAction.GetUserById){
        const state = getState();
       /*  return this.userService.findUserById(action.id).pipe(tap((usr) =>{
            setState({
                ...state,
                user:usr
            });

        })); */
        setState({
            ...state,
            user:action.user
        });
    }

}