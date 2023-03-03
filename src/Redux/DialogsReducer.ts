import {store} from "./State";
import {DialogsType} from "../App";

const initialState = {
    dialogs:[{text:'asd'},{text:'assd'},{text:'asdaaaa'},{text:'asdddd'},{text:'asqwed'}],
}
type DialogsInitialType = {
    dialogs: {text:string}[]
}

export const dialogsReducer = (state: ({ text: string } | { text: string } | { text: string } | { text: string } | { text: string })[], action: any)=> {
    switch (action.type) {
        case "ADD-Message":
            const newMessage = {text: store.getState().newMessage}
            store._state = {...store._state, dialogs: [newMessage, ...store._state.dialogs]}
            store._state.newMessage = ""

            return state
        case "UPDATE_NEW_POST_TEXT":
            return state
        default:
            return state
    }
}
export const addMessageAC = () => {
    return {type: "ADD-Message"}as const
}

type dialogsReducerType = ReturnType<typeof addMessageAC>