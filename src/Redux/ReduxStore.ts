import {combineReducers, createStore} from "redux";
import {sideBarReducer} from "./SideBarReducer";
import {dialogsReducer} from "./DialogsReducer";
import {profileReducer} from "./ProfileReducer";


let reducers = combineReducers({sideBarReducer, dialogsReducer, profileReducer})

export let store = createStore(reducers)
