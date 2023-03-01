import {StateAppType, storePropsType} from "../App";


let rerenderEntireTree = () => {
    console.log("./rerenderEntireTree")
};





console.log("state")
export const store = {
    _state: {

        profilePage: {

            posts: [
                {id: 1, message: "Hi! how are you?", likesCount: 23},
                {id: 2, message: "Do you love me?", likesCount: 33},

            ],
            newPostText: "s"
        },

        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
 /*   changeText(text: string) {
        store._state.profilePage.newPostText = text
        rerenderEntireTree()
    }, rerenderEntireTree() {
        console.log("./rerenderEntireTree")
    },
    addPost(text: string) {
        console.log(text)
        let newPost = {message: text, likesCount: 0}
        store._state = {...store._state.profilePage, posts: [newPost, ...store.getState().profilePage.posts]}
        console.log(store._state)
        rerenderEntireTree()
    },*/

    subscribe(observer: any) {
        rerenderEntireTree = observer
    },
    dispatch(action:any) {
        if (action.type === "ADD-POST") {

            let newPost = {id :23, message: store._state.profilePage.newPostText, likesCount: 0}
            store._state.profilePage.posts.push(newPost)
            store.getState().profilePage.newPostText = ""
            rerenderEntireTree()
        }

        if (action.type === "UPDATE-NEW-POST-TEXT") {
            store._state.profilePage.newPostText = action.newText
            rerenderEntireTree()
        }
        if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            store._state.dialogsPage.NewMessageBody = action.newMessage
            rerenderEntireTree()
        }
        if (action.type ==="SEND-NEW-MESSAGE-BODY"){
            let newMessage = {id:10, message:store.getState().dialogsPage.NewMessageBody}
            store._state.dialogsPage.messages.push(newMessage)
            rerenderEntireTree()
        }
    }
}
export const addPostAC = () => {
    return {type: "ADD-POST"} as const
}
export const onPostChangeAC = (newText:string) => {
    return {type:"UPDATE-NEW-POST-TEXT", newText}as const
}
export const updateNewPostBody = (newMessage:string) => {
    return {type:"UPDATE-NEW-MESSAGE-BODY", newMessage}
}
export const sendMessageAC = () => {
    return {type:"SEND-NEW-MESSAGE-BODY"}
}
type addPostACType = ReturnType<typeof addPostAC>

