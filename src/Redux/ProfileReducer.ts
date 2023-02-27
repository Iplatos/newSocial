import {store} from "./State";
import {PostsType} from "../App";

let initialState = {
posts:[{message: "like", likesCount: 14},{message: "asda", likesCount: 314},{message: "kringe", likesCount: 124} ],
    newPostText:"kama"
}

type initialStateType = {
    posts:PostsType[]
    newPostText:string
}

export const profileReducer = (state:initialStateType=initialState , action:any)=> {
    switch (action.type) {
        case "ADD-POST":
        let newPost = {message: store._state.newPostText, likesCount: 0}
        store._state = {...store._state, posts: [newPost, ...store._state.posts]}
        console.log(store._state)
        store._state.newPostText = ""
        return state
        case "UPDATE_NEW_POST_TEXT":
            store.getState().newPostText = action.newText
            return state
        default:
    return state
} }