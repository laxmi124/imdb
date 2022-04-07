import { combineReducers } from "redux";
import { ReducerL } from "./Laxmi/reducer";
import { ReducerK } from "./Kanhaiya/reducer";

export default combineReducers ({
    watchList : ReducerL,
    myReducer: ReducerK
})
