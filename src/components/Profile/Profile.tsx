import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props:any) => {

    console.log(props)
    console.log("profile")
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;