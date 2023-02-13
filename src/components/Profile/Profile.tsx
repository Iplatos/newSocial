import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "../myPosts/MyPosts";
import style from "./../../common/Container.module.css"
export const Profile = () => {
    return (
        <div className={style.container}>
            <div className={s.img}><textarea></textarea>
                <button>add posts</button>
            </div>
            <MyPosts/>
        </div>
    );
};

