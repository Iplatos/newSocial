import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props:{name:string, id:number}) => {
            return(
            <div className={s.dialogs_items}>
            <NavLink to={`${props.id}`} className={s.dialog}>{props.name}</NavLink>
            </div>)
        };


export default DialogItem;