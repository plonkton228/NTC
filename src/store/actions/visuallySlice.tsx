import { createSlice } from "@reduxjs/toolkit";
interface initialStateTemplate {
    isVisual : boolean,
    size : number | undefined,
    sizeP : number,
    marginTop : number,
    paddingTop : number,
    paddingTopInner : number,
    paddingFran: number,
}
const initialState : initialStateTemplate =  {
    isVisual : false,
    size : 18,
    sizeP : 24,
    marginTop: 200,
    paddingTop: 30,
    paddingTopInner : 45,
    paddingFran : 80, 
}
export const visuallySlice = createSlice({
    name : "visual",
    initialState : initialState,
    reducers: {
       setUpVisual(state){
        state.isVisual ? state.isVisual = false : state.isVisual = true
        state.isVisual ? state.size = 32 : state.size= 18
        state.isVisual ? state.sizeP = 26 : state.sizeP= 24
        state.isVisual ? state.marginTop = 236 : state.marginTop= 200
        state.isVisual ? state.paddingTop = 130 : state.paddingTop= 30
        state.isVisual ? state.paddingTopInner = 130 : state.paddingTopInner = 30
        state.isVisual ? state.paddingFran = 340 : state.paddingFran = 80
       }
    }
})
export const visuallyReducer = visuallySlice.reducer