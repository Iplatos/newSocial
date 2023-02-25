import React, {ChangeEvent, RefObject} from 'react';
import {Post} from "./Post/Post";
import {PostsType} from "../../App";


type PropsType = {
    posts: PostsType[]
    newPostText:string
    changeText:(t:string)=>void
    addPost:(t:string)=>void
}

export const MyPosts = (props: PropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.changeText(e.currentTarget.value)
    }

    const addPostClick = (e: RefObject<HTMLTextAreaElement>) => {
            let text = e.current?.value
        if (text) {
            props.addPost(text)
            // @ts-ignore
            newPostElement.current.value = ""
        }

    }
    return (
        <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
            <button onClick={() => addPostClick(newPostElement)}>add posts</button>
            {props.posts.map(p => <Post key={p.message} message={p.message} likesCount={p.likesCount}/>)}

        </div>
    );
};

