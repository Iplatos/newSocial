import React from 'react';
import s from "./Navbar.module.css"
import {useNavigate} from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate()
    const redirectTo = (link: string) => {
        navigate(link)
    }
    return (
        <nav className={s.nav}>
            <div className={s.item} onClick={() => redirectTo("profile")}>Profile</div>
            <div className={s.item} onClick={() => redirectTo("dialogs")}>Messages</div>
            <div className={s.item} onClick={() => redirectTo("news")}>News</div>
            <div className={s.item} onClick={() => redirectTo("music")}>Music</div>
            <div className={s.item} onClick={() => redirectTo("settings")}>Settings</div>


        </nav>
    );
};

