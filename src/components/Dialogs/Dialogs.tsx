import React, {ChangeEvent} from 'react';
import s from "./../../common/Container.module.css"
import style from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogType, MessageType} from "../../App";
import {sendMessageAC, updateNewPostBody} from "../../Redux/dialogsPageReducer";
import {useDispatch} from "react-redux";


type DialogsPropsType = {
    dialogsPage: {
        dialogs: DialogType[]
        messages: MessageType[]
        NewMessageBody: string
    }
}

export const Dialogs = (props: DialogsPropsType) => {

    const dispatch = useDispatch()
    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMessage = e.currentTarget.value
        dispatch(updateNewPostBody(newMessage))
    }
    const sendMessage = () => {
        dispatch(sendMessageAC())
    }

    return (
        <div className={s.container}>
            <div className={style.dialogs}>
                <div className={style.name}>
                    {props.dialogsPage.messages.map(user => <DialogItem key={user.id} id={user.id}
                                                                        name={user.message}/>)}
                </div>
                <div className={style.message}>
                    {props.dialogsPage.dialogs.map(m => <Message key={m.id} message={m.name}/>)}

                </div>
                <input value={props.dialogsPage.NewMessageBody} onChange={inputChangeHandler} type="text"/>
                <button onClick={sendMessage}>sss</button>
            </div>
        </div>
    );
};


