import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/Musik/Music";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";

// 44

function App() {


    return (
        <div className={"App-Wrapper"}>

            <Header/>
            <NavBar/>
            <div className={"appWrapperContent"}>
                <Routes>
                    <Route path={"/messages/*"} element={<Dialogs/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/news"} element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>


        </div>
    );
}

export default App;
