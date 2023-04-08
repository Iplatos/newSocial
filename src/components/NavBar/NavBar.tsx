import React from 'react';
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav} >
            <div className={s.item }>
                <NavLink className = { navData => navData.isActive ? s.active : s.item } to={'/profile'}>Profile</NavLink>
            </div>
            <div className={`${s.item}`}><NavLink className = { navData => navData.isActive ? s.active : s.item }  to={"/messages"}>Messages</NavLink></div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Settings</a></div>
        </nav>
    );
};

export default NavBar;