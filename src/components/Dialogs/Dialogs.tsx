import React from 'react';
import s from "./../../common/Container.module.css"
import style from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsType, MessagesType} from "../../App";
import {addMessageAC, dialogsReducer} from "../../Redux/DialogsReducer";

type DialogsPropsType={
    dialogs: DialogsType[]
    messages:MessagesType[]
    changeMessage:(t:string)=>void
    newMessage:string
    dispatch:(action:any)=>any
}

export const Dialogs = (props:DialogsPropsType) => {
  const dialogElement =  props.messages.map(user => <DialogItem key={user.id} id={user.id} userName={user.userName}/>)


    return (
        <div className={s.container}>
            <div className={style.dialogs}>
                <div className={style.name}>
                    {dialogElement}
                </div>
                <div className={style.message}>
                    {props.dialogs.map(m=> <Message key={m.text} message={m.text}/> )}
                    <input value={props.newMessage} onChange={(e)=>props.changeMessage(e.currentTarget.value)}/>
                    <button onClick={()=>props.dispatch(addMessageAC())} >add</button>
                </div>
            </div>
        </div>
    );
};


