import { Add_User, is_Login } from "./action"

export const ReducerK = ( store = {user:{}, isLogin:false}, action)=>{
    console.log("inside store" , store)
    switch (action.type) {
        case Add_User:
            return(
                {...store,
                user : {...action.payload}}
            ) 
        case is_Login:
            return({
                ...store,
                isLogin: action.payload
            })
            
    
        default:
            return store;
    }
}