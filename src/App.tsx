import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/Musik/Music";
import {Settings} from "./components/Settings/Settings";
import {storePropsType} from "./redux/state";

// 37

function App(props:any) {
    return (
        <div className={"App-Wrapper"}>

               <Header/>
              <NavBar/>
                <div className={"appWrapperContent"}>
                    <Routes>
                   <Route path={"/messages/*"} element={<Dialogs dialogs={props.state.dialogsPage}/>}/>
                   <Route path={"/profile"} element={<Profile posts={props.state.posts}/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>


        </div>
    );
}

export default App;
