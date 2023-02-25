import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
// 33 v 7m

 export type AppPropsType = {
         messages: MessagesType[]
         posts: PostsType[]
         dialogs: DialogsType[]
     newPostText:string
     changeText:(t:string)=>void

}
export type MessagesType ={
    id:number
    userName:string
}
export type PostsType = {
    message:string
    likesCount:number
}
export type DialogsType = {
    text:string
}
export type State = {
    messages: MessagesType[]
    posts: PostsType[]
    dialogs: DialogsType[]
    newPostText:string
    changeText:(t:string)=>void
}

function App(props:State) {

    return (

            <div className="app-wrapper">
                <Header/>
                <div className={"container"}>
                    <Navbar/>
                <Routes>
                    <Route path={"profile"} element={<Profile posts={props.posts} changeText={props.changeText} newPostText={props.newPostText}/>} />
                    <Route path={"dialogs/*"} element={<Dialogs messages={props.messages} dialogs={props.dialogs}/>} />
                    <Route path={"news"} element={<News/>} />
                    <Route path={"music"} element={<Music/>} />
                    <Route path={"settings"} element={<Settings/>} />
                </Routes>
                </div>
            </div>

    );
}

export default App;
