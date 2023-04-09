import React from 'react';
import MyPost from "./Post/MyPost";

const MyPosts = () => {
    return (
        <div>
            <h3>My Posts</h3>
            <textarea/>
            <button>Add Post</button>
            <button>Remove</button>
            <MyPost message={"hello"} likeCount={12}/>
            <MyPost message={"im ready"} likeCount={23}/>
        </div>
    );
};

export default MyPosts;