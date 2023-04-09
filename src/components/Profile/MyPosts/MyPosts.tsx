import React, {useRef} from 'react';
import MyPost from "./Post/MyPost";

const MyPosts = (props: any) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        const text = newPostElement.current?.value
        console.log(text)
    }

    return (
        <div>
            <h3>My Posts</h3>
            <textarea ref={newPostElement}/>
            <button onClick={addPost}>Add Post</button>
            <button>Remove</button>
            {props.posts.map((p: any) => (<MyPost key={p.id} message={p.message} likeCount={p.likeCount}/>))}

        </div>
    );
};

export default MyPosts;