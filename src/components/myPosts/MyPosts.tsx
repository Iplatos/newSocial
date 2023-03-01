import React, {ChangeEvent, RefObject} from 'react';
import {Post} from "./Post/Post";
import {PostType} from "../../App";
import {addPostAC, onPostChangeAC} from "../../Redux/State";


type PropsType = {
    posts: PostType[]
    newPostText:string
    dispatch:any
}

export const MyPosts = (props: PropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(onPostChangeAC(e.currentTarget.value))
    }

    const addPostClick = (e: RefObject<HTMLTextAreaElement>) => {
            let text = e.current?.value
        if (text) {
            props.dispatch(addPostAC())
            // @ts-ignore

        }

    }
    return (
        <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
            <button onClick={() => addPostClick(newPostElement)}>add posts</button>
            {props.posts.map(p => <Post key={p.message} message={p.message} likesCount={p.likeCount}/>)}

        </div>
    );
};


