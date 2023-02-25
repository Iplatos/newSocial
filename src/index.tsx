import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {AppPropsType, State} from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./Redux/State"

let rerenderEntireTree = (state:State) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store = {store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
