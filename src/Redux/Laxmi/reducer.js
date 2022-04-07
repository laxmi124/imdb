import { ADD_TO_WATCHLIST } from "./action";
import { NOT_ADDED_YET } from "./action";

export const ReducerL = ( store = {watchList:[]}, {type,payload})=>{

    switch(type){
        case ADD_TO_WATCHLIST:
            return{
            ...store, 
            watchList:payload
         }
        case NOT_ADDED_YET:
            return{
            ...store, 
            payload:!payload
         }
        default:
        return store
    }
}