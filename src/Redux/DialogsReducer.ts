import {store} from "./State";

const initialState = {

}

export const dialogsReducer = (state:any , action:dialogsReducerType)=> {

    if (action.type == "ADD-Message"){
        const newMessage = {text:store.getState().newMessage}
        store._state={...store._state, dialogs:[newMessage ,...store._state.dialogs]}
        store._state.newMessage = ""

    return state
}}
export const addMessageAC = () => {
    return {type: "ADD-Message"}as const
}

type dialogsReducerType = ReturnType<typeof addMessageAC>