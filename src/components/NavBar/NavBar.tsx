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
            <div className={s.item}>
                <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.item }> News</NavLink>
            </div> <div className={s.item}>
                <NavLink to="/users" className = { navData => navData.isActive ? s.active : s.item }> Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className = { navData => navData.isActive ? s.active : s.item }> Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className = { navData => navData.isActive ? s.active : s.item }> Settings</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;