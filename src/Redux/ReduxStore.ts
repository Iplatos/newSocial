import {combineReducers, createStore} from "redux";
import {dialogsPageReducer, DialogsReducerType} from "./dialogsPageReducer";
import {PostACType, profilePageReducer} from "./profilePageReducer";
import {UsersACType, usersReducer} from "./usersReducer";
import {ThunkDispatch} from "redux-thunk";


 const rootReducer = combineReducers({
    dialogs:dialogsPageReducer,
    profile:profilePageReducer,
     users:usersReducer
})
export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppActionsType = PostACType | UsersACType | DialogsReducerType
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>

// @ts-ignore
window.store = store