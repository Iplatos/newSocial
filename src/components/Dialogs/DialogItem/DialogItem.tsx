import {NavLink} from "react-router-dom";
import React from "react";
import {DialogType} from "../../../App";

type DialogItemPropsType = {
    id:number
    name:string


}

export const DialogItem = (props:DialogType) => {
    return (
        <NavLink to={`dialogs/${props.id}`}> {props.name}</NavLink>)
}