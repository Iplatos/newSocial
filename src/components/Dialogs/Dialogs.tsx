import React from 'react';
import s from "./../../common/Container.module.css"
import style from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsType, MessagesType} from "../../App";

type DialogsPropsType={
    dialogs: DialogsType[]
    messages:MessagesType[]
    changeMessage:(t:string)=>void
    newMessage:string
    dispatch:(action:any)=>any
}

export const Dialogs = (props:DialogsPropsType) => {

    return (
        <div className={s.container}>
            <div className={style.dialogs}>
                <div className={style.name}>
                    {props.messages.map(user => <DialogItem key={user.id} id={user.id} userName={user.userName}/>)}
                </div>
                <div className={style.message}>
                    {props.dialogs.map(m=> <Message key={m.text} message={m.text}/> )}
                    <input value={props.newMessage} onChange={(e)=>props.changeMessage(e.currentTarget.value)}/>
                    <button onClick={()=>props.dispatch({type:"ADD-Message"})} >add</button>
                </div>
            </div>
        </div>
    );
};


