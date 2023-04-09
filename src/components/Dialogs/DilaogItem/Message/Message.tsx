import React from 'react';
import s from "../../Dialogs.module.css";

const Message = (props:any) => {
    return (
        <div className={s.messages}>
            {props.messages.map((m:any)=><Message message={m.message}/>)}


        </div>
    );
};

export default Message;