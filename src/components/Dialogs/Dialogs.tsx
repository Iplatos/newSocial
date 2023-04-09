import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DilaogItem/DialogItem";


const Message = (props: { message: string }) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props: any) => {
    console.log(props)
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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {props.dialogs.dialogs.map((d: any) => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogs.messages.map((m: any) => <Message key={m.id} message={m.message}/>)}

                <textarea/>
                <button>Add</button>
            </div>

        </div>
    );
};

export default Dialogs;