import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {AppPropsType} from './App';
import {BrowserRouter} from "react-router-dom";
import {state, subscribe} from "./Redux/State"

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App newPostText={state.newPostText} changeText={state.changeText} messages={state.messages} dialogs={state.dialogs} posts={state.posts}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
subscribe(rerenderEntireTree)
