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
    _state: State
    changeText: (t: string) => void
    addPost: (text: string) => void
    subscribe: (obs: any) => void
    rerenderEntireTree: () => void
    getState: () => State
    dispatch: (action: any) => any
    changeMessage: (t: string) => void
}
export type MessagesType = {
    id: number
    userName: string
}
export type PostsType = {
    message: string
    likesCount: number
}
export type DialogsType = {
    text: string
}
export type State = {
    messages: MessagesType[]
    posts: PostsType[]
    dialogs: DialogsType[]
    newPostText: string
    newMessage: string
}

function App(props: any) {

    const {store} = props
    console.log(store)
    return (

        <div className="app-wrapper">
            <Header/>
            <div className={"container"}>
                <Navbar/>
                <Routes>
                    <Route path={"profile"} element={<Profile dispatch={store.dispatch} posts={store.getState().posts}
                                                              changeText={store.changeText}
                                                              addPost={store.addPost.bind(store)}
                                                              newPostText={store.getState().newPostText}/>}/>
                    <Route path={"dialogs/*"} element={<Dialogs dispatch={store.dispatch} messages={store.getState().messages}
                                                                dialogs={store.getState().dialogs}
                    changeMessage={store.changeMessage} newMessage={store.newMessage}
                    />}/>
                    <Route path={"news"} element={<News/>}/>
                    <Route path={"music"} element={<Music/>}/>
                    <Route path={"settings"} element={<Settings/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
