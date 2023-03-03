import React from 'react';
import {MyPosts} from "../myPosts/MyPosts";
import style from "./../../common/Container.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../App";


type ProfileType = {
    profilePage: {
        posts:PostType[]
        newPostText:string
    }

}
export const Profile = (props:ProfileType) => {

    console.log(props)

    return (
        <div className={style.container}>
            <ProfileInfo/>

            <MyPosts newPostText={props.profilePage.newPostText} posts={props.profilePage.posts}/>
        </div>
    );
};

