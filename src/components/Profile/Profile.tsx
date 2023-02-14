import React from 'react';
import {MyPosts} from "../myPosts/MyPosts";
import style from "./../../common/Container.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../App";


type ProfileType = {
    posts: PostsType[]
}
export const Profile = (props:ProfileType) => {



    return (
        <div className={style.container}>
            <ProfileInfo/>

            <MyPosts posts={props.posts}/>
        </div>
    );
};

