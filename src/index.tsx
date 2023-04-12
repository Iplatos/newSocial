import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {state, store} from "./redux/state"

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter><App dispatch={store.dispatch.bind(store)} store={store.getState()}

         /></BrowserRouter>
        , document.getElementById('root')
    );
}
rerenderEntireTree()


