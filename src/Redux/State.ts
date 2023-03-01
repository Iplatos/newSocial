import {StateAppType, storePropsType} from "../App";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {profilePageReducer} from "./profilePageReducer";


export let rerenderEntireTree = () => {
    console.log("./rerenderEntireTree")
};

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
/*    dispatch(action:any) {
       this._state.profilePage = dialogsPageReducer(store._state.profilePage, action )
       this._state.dialogsPage = profilePageReducer(store._state.dialogsPage, action )
        this.subscribe(this._state)

    }*/

}




