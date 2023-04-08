import React from 'react';
import s from "./Post.module.css"

type PropsType = {
    message: string
    likesCount:number
}
export const Post = (props: PropsType) => {
    return (
        <div>
            <img className={s.img}
                 src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5wQYV3LOl13azQZwItzVNRP6W3I90-eyh0Q&usqp=CAU"}/>
            {props.message}
            <div>likes:{props.likesCount}</div>
        </div>
    );
};

