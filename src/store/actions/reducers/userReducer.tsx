import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from "js-cookie"
import { Action } from "../.."
import { user } from "../userSlice"
export const authUser = createAsyncThunk('users/auth', async (info : {username : string, password : string }, thunkAPI)=> {
     try {
       const response = await axios.post(process.env.REACT_APP_API_URL+'/auth/login', info)
       Cookies.set("token",response.data.access_token)
       return response.data
     } catch (error) {
        thunkAPI.rejectWithValue(JSON.stringify(error))
     }
})





