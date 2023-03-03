

const initialState =   {
    messages: [
        {id: 1, message: "hi"},
        {id: 2, message: "how are you"},
        {id: 3, message: "where is my money?"},
        {id: 4, message: "ku ku "},
        {id: 5, message: "i've lost my keys"}
    ],
        dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Igor"},
        {id: 3, name: "Pepsi"},
        {id: 4, name: "Gena"},
        {id: 5, name: "Kolya"}
    ],
        NewMessageBody : ""
}

type initialStateType = {
    messages: {id:number, message:string}[]
    dialogs: {id:number, name:string}[]
    NewMessageBody:string
}
export const dialogsPageReducer = (state:initialStateType=initialState, action:any):initialStateType =>{
switch (action.type){
    case "UPDATE-NEW-MESSAGE-BODY" :
        state.NewMessageBody = action.newMessage
        return {...state}
    case "SEND-NEW-MESSAGE-BODY" :
        let newMessage = {id:10, message:state.NewMessageBody}

        return {...state, messages:[newMessage, ...state.messages], NewMessageBody:""}
    default:
        return state
}

}

export const updateNewPostBody = (newMessage:string) => {
    return {type:"UPDATE-NEW-MESSAGE-BODY", newMessage}
}
export const sendMessageAC = () => {
    return {type:"SEND-NEW-MESSAGE-BODY"}
}
export type DialogsReducerType = ReturnType<typeof updateNewPostBody> | ReturnType<typeof updateNewPostBody>