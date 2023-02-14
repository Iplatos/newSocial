import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    id:number
    userName:string

}

export const DialogItem = (props:DialogItemPropsType) => {
    return (
        <NavLink to={`dialogs/${props.id}`}> {props.userName}</NavLink>)
}