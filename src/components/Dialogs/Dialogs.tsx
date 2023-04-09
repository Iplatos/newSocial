import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DilaogItem/DialogItem";


const Message = (props:{ message:string})=> {
    return  <div className={s.message}>{props.message}</div>
}

const Dialogs = (props:any) => {

    let dialogs = [
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
   ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {messages.map(m=><Message message={m.message}/>)}


            </div>
        </div>
    );
};

export default Dialogs;