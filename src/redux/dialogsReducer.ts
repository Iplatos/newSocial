const initialState = {
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
    NewMessageBody: ""
}

export const dialogsReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return state = {...state, NewMessageBody: action.body}
        case "SEND-NEW-MESSAGE" :
            let body = state.NewMessageBody
            let newMessage = {id: 34, message: body}
            return state = {...state, messages: [...state.messages, newMessage], NewMessageBody: ""}
        default:
            return state
    }

}

type actionType = UpdateNewMessageBodyAC | SendNewMessageAC
type UpdateNewMessageBodyAC = ReturnType<typeof UpdateNewMessageBodyAC>

type SendNewMessageAC = ReturnType<typeof SendNewMessageAC>


export let UpdateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
         body
    } as const
}
export let SendNewMessageAC = () => {
    return {
        type: "SEND-NEW-MESSAGE",
        payload: {}
    } as const
}
