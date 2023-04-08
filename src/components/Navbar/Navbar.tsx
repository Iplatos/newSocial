import React, {useState} from 'react';
import s from "./Navbar.module.css"
import {NavLink, useNavigate} from "react-router-dom";

export const Navbar = () => {
    const [active, setActive] = useState("profile")
    const navigate = useNavigate()
    const navColor = (link:string) => {
       return active == link ? s.active : s.item
    }
    const redirectTo = (link: string) => {
        navigate(link)
        setActive(link)

    }

    return (
        <nav className={s.nav}>
            <div className={navColor("profile")} onClick={() => redirectTo("profile")}>Profile</div>
            <div className={navColor("dialogs")} onClick={() => redirectTo("dialogs")}>Messages</div>
            <div className={navColor("users")} onClick={() => redirectTo("users")}>Users</div>
            <div className={navColor("news")} onClick={() => redirectTo("news")}>News</div>
            <div className={navColor("music")} onClick={() => redirectTo("music")}>Music</div>
            <div className={navColor("settings")} onClick={() => redirectTo("settings")}>Settings</div>

        </nav>
    );
};

