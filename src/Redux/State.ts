import {AppPropsType} from "../App";
import {rerenderEntireTree} from "./rerenderEntireTree";

export let state:AppPropsType = {
    messages:[{id:1, userName:"kirila"},{id:2, userName:"kirild"},{id:3, userName:"kirils"},{id:4, userName:"kirild"}],
    posts:[{message: "like", likesCount: 14},{message: "asda", likesCount: 314},{message: "kringe", likesCount: 124} ],
    dialogs:[{text:'asd'},{text:'assd'},{text:'asdaaaa'},{text:'asdddd'},{text:'asqwed'}]
}
export const addPost = (text:string) => {
    console.log(text)
    let newPost = {message:text, likesCount:0 }
    state = {...state, posts:[...state.posts , newPost]}
    console.log(state)
    rerenderEntireTree()
}