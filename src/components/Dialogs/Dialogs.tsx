import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
          <div className={s.dialogs_items}>
              <NavLink to={"/1"} className={ s.dialog}>sveta</NavLink>
              <NavLink to={"/2"} className={s.dialog }>semen</NavLink>
              <NavLink to={"/3"} className={s.dialog}>sara</NavLink>
              <NavLink to={"/4"} className={s.dialog}>sergey</NavLink>
              <NavLink to={"/5"} className={s.dialog}>snegok</NavLink>

          </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>KUKU</div>
                <div className={s.message}>BLD bLD</div>
                <div className={s.message}>nuvot nak</div>
                <div className={s.message}>cuut cut cut cutt</div>
            </div>
        </div>
    );
};

export default Dialogs;