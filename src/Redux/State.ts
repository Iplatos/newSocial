import {AppPropsType} from "../App";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
 let rerenderEntireTree = () => {
     console.log("./rerenderEntireTree")
 }  ;
console.log("state")
export const store:AppPropsType = {
    _state:{
        messages:[{id:1, userName:"kirila"},{id:2, userName:"kirild"},{id:3, userName:"kirils"},{id:4, userName:"kirild"}],
        posts:[{message: "like", likesCount: 14},{message: "asda", likesCount: 314},{message: "kringe", likesCount: 124} ],
        dialogs:[{text:'asd'},{text:'assd'},{text:'asdaaaa'},{text:'asdddd'},{text:'asqwed'}],
        newPostText:"kama",
        newMessage: "message"
    },
    getState(){
        return this._state
    },
    changeText(text:string){
        store._state.newPostText=text
        rerenderEntireTree()

},
    changeMessage(text:string){
        store._state.newMessage=text
        rerenderEntireTree()

    },
    rerenderEntireTree(){
        console.log("./rerenderEntireTree")
    }  ,
    addPost(text:string) {
        console.log(text)
        let newPost = {message:text, likesCount:0 }
        store._state = {...store._state, posts:[newPost , ...store._state.posts]}
        console.log(store._state)
        rerenderEntireTree()
    },
    subscribe(observer:any){
        rerenderEntireTree = observer
    }, dispatch(action:any){
        dialogsReducer(store.getState, action)
/*if (action.type == "ADD-POST"){
    let newPost = {message:store._state.newPostText, likesCount:0 }
    store._state = {...store._state, posts:[newPost , ...store._state.posts]}
    console.log(store._state)
    store._state.newPostText = ""
    rerenderEntireTree()*/
}/*if (action.type == "ADD-Message"){
    const newMessage = {text:store.getState().newMessage}
            store._state={...store._state, dialogs:[newMessage ,...store._state.dialogs]}
            store._state.newMessage = ""
            rerenderEntireTree()
        }*/
    }



