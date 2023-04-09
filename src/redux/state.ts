export type PostType = {
    id: number,
    message: string,
    likeCount: number
}

type MessageType = {
    id: number,
    message: string
}

type DialogType = {
    id: number,
    name: string
}

export type ProfilePageType = {
    posts: PostType[],
    newPostText: string
}

export type DialogPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
    NewMessageBody : string

}

export type StateAppType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType

}
export type storePropsType = {
    _state:StateAppType
}

export const state = {
    posts: [
        {id: 1, message: "Hi! how are you?", likeCount: 23},
        {id: 2, message: "Do you love me?", likeCount: 33},

    ],
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
    }
}


export const store = {
    _state: {

        profilePage: {

            posts: [
                {id: 1, message: "Hi! how are you?", likeCount: 23},
                {id: 2, message: "Do you love me?", likeCount: 33},

            ],
            newPostText: ""
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
    _callSubscriber(props: StateAppType) {
        console.log("state is changed")
    },
    subcribe(observer: () => void) {
        this._callSubscriber = observer
    },}
    /*_addPost(message: string) {

        let newPost = {id: 5, message: this._state.profilePage.newPostText, likecount: 3}
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber(this._state);
        this._updateNewPostText("")
        },


    _updateNewPostText(newText: string) {
     },
    */


/*    dispatch (action: any) {
        if (action.type === "ADD-POST") {
            let newPost = {id: 5, message: this._state.profilePage.newPostText, likeCount: 3}
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText = ""


        } else if (action.type === "UPDATE-NEW_POST_TEXT") {
            this._state.profilePage.newPostText = action.payload.newText
            this._callSubscriber(action.payload.newText);

        } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            this._state.dialogsPage.NewMessageBody = action.payload.body
            this._callSubscriber(this._state);

        }  else if (action.type === "SEND-NEW-MESSAGE") {
            let body = this._state.dialogsPage.NewMessageBody
            this._state.dialogsPage.NewMessageBody = ""
            this._state.dialogsPage.messages.push({id: 8, message: body, })
            this._callSubscriber(this._state);
        }
    }
}*/

/*
export type ReduceType = AddPostACType | UpdateNewPostTextACType | UpdateNewMessageBodyAC | SendNewMessageAC

type AddPostACType = ReturnType<typeof AddPostAC>

type UpdateNewPostTextACType = ReturnType<typeof UpdateNewPostTextAC>

type UpdateNewMessageBodyAC = ReturnType<typeof UpdateNewMessageBodyAC>

type SendNewMessageAC = ReturnType<typeof SendNewMessageAC>

export let AddPostAC = (newText: string) => {
    return {
        type: "ADD-POST",
        payload: {newText}
    } as const
}
export let UpdateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW_POST_TEXT",
        payload: {text}
    } as const
}
export let UpdateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        payload: {body}
    } as const
}
export let SendNewMessageAC = () => {
    return {
        type: "SEND-NEW-MESSAGE",
        payload: {}
    } as const
}
*/


//redux система управления состоянием
