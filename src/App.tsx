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
import {store} from "./Redux/State";
// 33 v 7m

export type PostType = {
    id: number,
    message: string,
    likeCount: number
}

export type MessageType = {
    id: number,
    message: string
}

export type DialogType = {
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

function App(props:any) {
    return (

            <div className="app-wrapper">
                <Header/>
                <div className={"container"}>
                    <Navbar/>
                <Routes>
                    <Route path={"profile"} element={<Profile profilePage={props.state.profilePage} dispatch={store.dispatch}/>} />
                    <Route path={"dialogs/*"} element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={store.dispatch} />} />
                    <Route path={"news"} element={<News/>} />
                    <Route path={"music"} element={<Music/>} />
                    <Route path={"settings"} element={<Settings/>} />
                </Routes>
                </div>
            </div>

    );
}

export default App;
