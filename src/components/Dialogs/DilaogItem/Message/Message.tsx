import React from 'react';
import s from "../../Dialogs.module.css";

const Message = (props:{message:string}) => {

    return (
        <div className={s.messages}>
         <div>{props.message}</div>


        </div>
    );
};

export default Message;