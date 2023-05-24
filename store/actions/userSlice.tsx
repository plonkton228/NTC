import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { authUser } from './reducers/userReducer'
 interface UserI {
    name : string,
    email : string,
}
interface initialStateTemplate {
    user : UserI
    isLoading : boolean
}

const initialState : initialStateTemplate = {
   user : {name : "", email : ""},
   isLoading : false
}


const user = createSlice({
    name : 'user',
    initialState,
    reducers: {
        some (){

        },

    },
    extraReducers: {
        [authUser.pending.type](state){
              state.isLoading = true
        },
        [authUser.fulfilled.type](state, action : PayloadAction<UserI>){
            state.isLoading = false
            state.user.name = action.payload.name
            state.user.email = action.payload.email
        },
        [authUser.rejected.type](state){
            state.isLoading = false
        }
    }
})
export const userReducer =  user.reducer