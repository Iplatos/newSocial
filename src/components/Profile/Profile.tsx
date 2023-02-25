import React from 'react';
import {MyPosts} from "../myPosts/MyPosts";
import style from "./../../common/Container.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../App";


type ProfileType = {
    posts: PostsType[]
    newPostText:string
    changeText:(t:string)=>void
    addPost:(t:string)=>void
    dispatch:(action:any)=>any
}
export const Profile = (props:ProfileType) => {



    return (
        <div className={style.container}>
            <ProfileInfo/>

            <MyPosts dispatch={props.dispatch} newPostText={props.newPostText} changeText={props.changeText} addPost = {props.addPost} posts={props.posts}/>
        </div>
    );
};

