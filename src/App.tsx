import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./Redux/ReduxStore";
// 33 v 7m

export type PostType = {
    id: number,
    message: string,
    likesCount: number
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

function App() {
    const profilePage = useSelector<AppRootStateType,ProfilePageType >(state=>state.profile)
    const dialogsPage = useSelector<AppRootStateType,DialogPageType >(state=>state.dialogs)
    return (

            <div className="app-wrapper">
                <Header/>
                <div className={"container"}>
                    <Navbar/>
                <Routes>
                    <Route path={"profile"} element={<Profile profilePage={profilePage}/>} />
                    <Route path={"dialogs/*"} element={<Dialogs dialogsPage={dialogsPage}  />} />
                    <Route path={"news"} element={<News/>} />
                    <Route path={"music"} element={<Music/>} />
                    <Route path={"settings"} element={<Settings/>} />
                </Routes>
                </div>
            </div>

    );
}

export default App;
