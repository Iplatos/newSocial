import React, {RefObject} from 'react';
import {Post} from "./Post/Post";
import {PostsType} from "../../App";
import {addPost} from "../../Redux/State";

type PropsType = {
    posts: PostsType[]
}

export const MyPosts = (props: PropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostClick = (e: RefObject<HTMLTextAreaElement>) => {
            let text = e.current?.value
        if (text) {
            addPost(text)
        }

    }
    return (
        <div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={() => addPostClick(newPostElement)}>add posts</button>
            {props.posts.map(p => <Post key={p.message} message={p.message} likesCount={p.likesCount}/>)}

        </div>
    );
};

