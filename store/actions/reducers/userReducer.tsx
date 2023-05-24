import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const authUser = createAsyncThunk('users/auth', async (info : {name : string, email : string}, thunkAPI)=> {
     try {
       const response = await axios.get('')
       return response.data
     } catch (error) {
        thunkAPI.rejectWithValue(JSON.stringify(error))
     }
})


