import React, {createRef} from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DilaogItem/DialogItem";
import {useDispatch, useSelector} from "react-redux";
import {DialogPageType, StateAppType} from "../../redux/state";
import {useAppSelector} from "../../redux/redux-store";
import {SendNewMessageAC, UpdateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Message from "./DilaogItem/Message/Message";


const Dialogs = () => {
    const dialogsPage = useAppSelector<DialogPageType>(state=>state.dialogsReducer)
    const newMessageRef = React.createRef<HTMLTextAreaElement>()
const dispatch = useDispatch()

    /*   let dialogs = [
          {id: 1, name: "Dimych"},
          {id: 2, name: "Igor"},
          {id: 3, name: "Pepsi"},
          {id: 4, name: "Gena"},
          {id: 5, name: "Kolya"}
      ]
      let messages = [
          {id: 1, message: "hi"},
          {id: 2, message: "how are you"},
          {id: 3, message: "where is my money?"},
          {id: 4, message: "ku ku "},
          {id: 5, message: "i've lost my keys"}
      ]*/
    const onMessageTextChange =()=>{
        const body = newMessageRef.current?.value
        if (body) {
            dispatch(UpdateNewMessageBodyAC(body))
        }

    }
    const onMessageSend = () => {
        dispatch( SendNewMessageAC())
    }

    console.log(dialogsPage)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsPage.dialogs.map((d: any) => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {dialogsPage.messages.map((m: any) => <Message key={m.id} message={m.message}/>)}

                <textarea ref={newMessageRef} value={dialogsPage.NewMessageBody} onChange={onMessageTextChange}/>
                <button onClick={onMessageSend}>Add</button>
            </div>

        </div>
    );
};

export default Dialogs;