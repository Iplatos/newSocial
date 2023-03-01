import {rerenderEntireTree, store} from "./State";


let initialState = {
        posts: [
            {id: 1, message: "Hi! how are you?", likesCount: 23},
            {id: 2, message: "Do you love me?", likesCount: 33},

        ],
        newPostText: "s"
}
type initialType = {
    posts:{id:number, message:string, likesCount:number}[]
    newPostText:string
}

export const profilePageReducer = (state:initialType=initialState, action:PostACType) =>{
switch (action.type) {
    case "ADD-POST":
        let newPost = {id: 23, message: state.newPostText, likesCount: 0}
        state.posts.push(newPost)
        state.newPostText = ""
return state
    case "UPDATE-NEW-POST-TEXT":
        state.newPostText = action.newText
        return state
    default:
        return state
}
}


export const addPostAC = () => {
    return {type: "ADD-POST"} as const
}
export const onPostChangeAC = (newText:string) => {
    return {type:"UPDATE-NEW-POST-TEXT", newText}as const
}

type PostACType = ReturnType<typeof addPostAC> | ReturnType<typeof onPostChangeAC>