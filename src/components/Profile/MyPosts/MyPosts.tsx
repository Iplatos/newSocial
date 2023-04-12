import React from 'react';
import MyPost from "./Post/MyPost";

const MyPosts = (props: any) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
const action={type:"ADD-POST"}
        props.dispatch(action)
    }
    const onPostChange = () => {
        const text = newPostElement.current?.value
        const action = {type:"UPDATE-NEW_POST_TEXT", newText:text}
        props.dispatch(action)
    }
    console.log(props)
    console.log("myposts")
    return (
        <div>
            <h3>My Posts</h3>
            <textarea ref={newPostElement} value={props.posts.newPostText} onChange={onPostChange}/>
            <button onClick={addPost}>Add Post</button>
            <button>Remove</button>
            {props.posts.posts.map((p: any) => (<MyPost key={p.id} message={p.message} likeCount={p.likeCount}/>))}

        </div>
    );
};

export default MyPosts;