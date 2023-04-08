import React from 'react';
import MyPost from "./Post/MyPost";

const MyPosts = () => {
    return (
        <div><div>My Posts</div>
            <textarea/>
        <button>Add Post</button>
        <button>Remove</button>
<MyPost message = {"hello"} likeCount={12}/>
<MyPost message = {"im ready"} likeCount={23}/>
        </div>
    );
};

export default MyPosts;