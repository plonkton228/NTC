import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from "js-cookie"
import { Action } from "../.."
import { user } from "../userSlice"


export const reAuthUser = ( username : string)=> (dispatch : Action) => {
    dispatch(user.actions.reUser(username))
}
