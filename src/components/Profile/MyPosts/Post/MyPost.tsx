import React from 'react';
import s from "./MyPost.module.css"

const MyPost = (props:{message:string, likeCount:number}) => {
    return (
        <div className={s.post}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DUVAqsASH7n0AuyqjyEXQ1lnWCQPB1qtbOG1bdhRzV--MTm0poqFcRKJaF8Uc5YhRe4&usqp=CAU"/>
            <div>{props.message}</div>
            <span>like:{props.likeCount}</span>
        </div>
    );
};

export default MyPost;