import React from 'react';
import s from "./../../common/Container.module.css"
import style from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsType, MessagesType} from "../../App";

type DialogsPropsType={
    dialogs: DialogsType[]
    messages:MessagesType[]
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

                </div>
            </div>
        </div>
    );
};


