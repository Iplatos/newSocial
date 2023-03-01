import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {profilePageReducer} from "./profilePageReducer";


let reducer = combineReducers({
    dialogsPageReducer,
    profilePageReducer
})
let store = createStore(reducer)

export default store