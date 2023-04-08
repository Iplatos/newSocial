import React from 'react';
import './App.css';
import Header from "./components/Header/Header";

import Profile from "./components/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Navigate, Route, Routes} from "react-router-dom";

// 21

function App() {
    return (
        <div className={"App-Wrapper"}>

               <Header/>
              <NavBar/>
                {/* <Profile/>*/}
                <div className={"appWrapperContent"}>
                    <Routes>
                   <Route path={"/messages"} element={<Dialogs/>}/>
                   <Route path={"/profile"} element={<Profile/>}/>
                        <Route path={"*"} element={<Navigate to={"/404"}/>}/>
                        <Route path={'/404'} element={<h1>PAGE NOT FOUND</h1>}/>
                    </Routes>
                </div>


        </div>
    );
}

export default App;
