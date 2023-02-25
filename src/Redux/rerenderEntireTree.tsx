import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App, {AppPropsType} from "../App";
import {state} from "./State";
import React from "react";

export const rerenderEntireTree = (state:AppPropsType) => {
    ReactDOM.render(
        <BrowserRouter><App newPostText={state.newPostText} changeText={state.changeText} messages={state.messages} dialogs={state.dialogs} posts={state.posts}/></BrowserRouter>,
        document.getElementById('root')
);
}