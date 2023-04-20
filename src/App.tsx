import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Music} from "./components/Musik/Music";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";
import UsersContainer from "./components/Users/usersContainer";
import {Route} from "react-router-dom";

//57 start
function App() {


    return (
        <div className={"App-Wrapper"}>

            <Header/>
            <NavBar/>
            <div className={"appWrapperContent"}>
                    <Route path={"/messages/*"} component={()=><Dialogs/>}/>
                    <Route path={"/profile"}  component={()=><Profile/>}/>
                    <Route path={"/news"}  component={()=><News/>}/>
                    <Route path={"/users"}  component={()=><UsersContainer />}/>
                    <Route path={"/music"}  component={()=><Music/>}/>
                    <Route path={"/settings"}  component={()=><Settings/>}/>
            </div>


        </div>
    );
}

export default App;
