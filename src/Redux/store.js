import { combineReducers, createStore } from "redux";
import { ReducerK } from "./Kanhaiya/reducer";
import { ReducerL } from "./Laxmi/reducer";
import { ReducerU } from "./Utsav/reducer";

const rootReducer = combineReducers(ReducerL , ReducerK, ReducerU)

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())