import { Action } from "../.."
import { visuallySlice } from "../visuallySlice"



export const SetUpVisual = () => async (dispatch: Action) => {
    dispatch(visuallySlice.actions.setUpVisual())
}