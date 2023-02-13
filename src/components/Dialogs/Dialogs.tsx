import React from 'react';
import s from "./../../common/Container.module.css"
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.container}>
            <div className={style.dialogs}>
                <div className={style.name}>
                    <NavLink to={"dialogs/1"}>petya S</NavLink>
                    <NavLink to={"dialogs/2"}>petya W</NavLink>
                    <NavLink to={"dialogs/3"}>petya B</NavLink>
                    <NavLink to={"dialogs/4"}>petya R</NavLink>

                </div>
                <div className={style.message}>
                    <div>nu 4e</div>
                    <div>kak ono</div>
                </div>
            </div>
        </div>
    );
};

