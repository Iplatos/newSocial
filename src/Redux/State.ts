import {AppPropsType} from "../App";
 let rerenderEntireTree = () => {
     console.log("./rerenderEntireTree")
 }  ;
console.log("state")
export let state:AppPropsType = {
    messages:[{id:1, userName:"kirila"},{id:2, userName:"kirild"},{id:3, userName:"kirils"},{id:4, userName:"kirild"}],
    posts:[{message: "like", likesCount: 14},{message: "asda", likesCount: 314},{message: "kringe", likesCount: 124} ],
    dialogs:[{text:'asd'},{text:'assd'},{text:'asdaaaa'},{text:'asdddd'},{text:'asqwed'}],
    newPostText:"kama",
    changeText(text:string){
        state.newPostText=text
        rerenderEntireTree()
    }
}
export const addPost = (text:string) => {
    console.log(text)
    let newPost = {message:text, likesCount:0 }
    state = {...state, posts:[newPost , ...state.posts]}
    console.log(state)
    rerenderEntireTree()
}
export const subscribe=(observer:any) => {
    rerenderEntireTree = observer
}

