import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {profilePageReducer} from "./profilePageReducer";


 const rootReducer = combineReducers({
    dialogs:dialogsPageReducer,
    profile:profilePageReducer
})
export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store