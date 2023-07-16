import { combineReducers } from "redux";
import { userReducer } from "./actions/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { visuallyReducer } from "./actions/visuallySlice";
const Reducers = combineReducers({
    userReducer,
    visuallyReducer
})

export const setUpStore = ()=> {
   return configureStore({
    reducer : Reducers
})
} 

export type ReducerType = ReturnType<typeof Reducers>
export type StoreType = ReturnType<typeof setUpStore>
export type Action = StoreType['dispatch']