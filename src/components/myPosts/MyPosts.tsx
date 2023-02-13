import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <Post message ={"hello"} likesCount={10}/>
            <Post message ={"do you"} likesCount={140}/>
            <Post message={"like"} likesCount={14}/>
        </div>
    );
};

