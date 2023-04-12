import React from 'react';
import MyPost from "./Post/MyPost";
import {useDispatch, useSelector} from "react-redux";
import {ProfilePageType, StateAppType} from "../../../redux/state";
import {useAppSelector} from "../../../redux/redux-store";

const MyPosts = (props: any) => {
    const dispatch = useDispatch()
    const newPostElement = React.createRef<HTMLTextAreaElement>()
const profilePage = useAppSelector<ProfilePageType>(state => state.profileReducer)
    let addPost = () => {
const action={type:"ADD-POST"}
        dispatch(action)
    }
    const onPostChange = () => {
        const text = newPostElement.current?.value
        const action = {type:"UPDATE-NEW_POST_TEXT", newText:text}
        dispatch(action)
    }
    console.log(props)
    console.log("myposts")
    return (
        <div>
            <h3>My Posts</h3>
            <textarea ref={newPostElement} value={profilePage.newPostText} onChange={onPostChange}/>
            <button onClick={addPost}>Add Post</button>
            <button>Remove</button>
            {profilePage.posts.map((p: any) => (<MyPost key={p.id} message={p.message} likeCount={p.likeCount}/>))}

        </div>
    );
};

export default MyPosts;