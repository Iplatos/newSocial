import React, {useState} from 'react';
import s from "./Navbar.module.css"
import {useNavigate} from "react-router-dom";

export const Navbar = () => {
    const [active, setActive] = useState("profile")
    const navigate = useNavigate()
    const redirectTo = (link: string) => {
        navigate(link)
        setActive(link)
    }

    return (
        <nav className={s.nav}>
            <div className={active=="profile" ? s.active : s.item} onClick={() => redirectTo("profile")}>Profile</div>
            <div className={active=="dialogs" ? s.active : s.item} onClick={() => redirectTo("dialogs")}>Messages</div>
            <div className={active=="news" ? s.active : s.item} onClick={() => redirectTo("news")}>News</div>
            <div className={active=="music" ? s.active : s.item} onClick={() => redirectTo("music")}>Music</div>
            <div className={active=="settings" ? s.active : s.item} onClick={() => redirectTo("settings")}>Settings</div>


        </nav>
    );
};

