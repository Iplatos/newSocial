import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import thunk from "redux-thunk";
import {usersReducer} from "./usersReducer";

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sideBarReducer,
    usersReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof reducers>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store=store