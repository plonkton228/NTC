import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { authUser } from './reducers/userReducer'
 interface UserI {
    username : string,
    password : string,
}
interface initialStateTemplate {
    user : UserI
    isLoading : boolean,
    isAuto : boolean
}

const initialState : initialStateTemplate = {
   user : {username : "", password : ""},
   isLoading : false,
   isAuto : false,
}


export const user = createSlice({
    name : 'user',
    initialState,
    reducers: {
        reUser(state, action : PayloadAction<string>){
           state.isAuto = true;
           state.user.username = action.payload
        }

    },
    extraReducers: {
        [authUser.pending.type](state){
              state.isLoading = true
        },
        [authUser.fulfilled.type](state, action : PayloadAction<UserI>){
            state.isLoading = false
            state.user.username = action.payload.username
            state.user.password = action.payload.password
            state.isAuto = true
        },
        [authUser.rejected.type](state){
            state.isLoading = false
            state.isAuto = false
        }
    }
})
export const userReducer =  user.reducer