import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { Action, ReducerType } from "../store";



export const useAppDispatch = () => useDispatch<Action>();
export const useAppSelector: TypedUseSelectorHook<ReducerType> = useSelector;