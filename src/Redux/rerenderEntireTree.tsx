import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "../App";
import {state} from "./State";
import React from "react";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter><App messages={state.messages} dialogs={state.dialogs} posts={state.posts}/></BrowserRouter>,
        document.getElementById('root')
);
}