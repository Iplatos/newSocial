import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sideBarReducer
})

export const store = createStore(reducers)
export type AppRootStateType = ReturnType<typeof reducers>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store=store