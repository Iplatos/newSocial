import React from 'react';
import style from "../../common/Container.module.css";
import {UsersType} from "../../Redux/usersReducer";

type PropsType = {
    follow:(id:number)=>void
setUsers:(users: UsersType[])=>void
unFollow:(id:number)=>void
 users: UsersType[]
}

export const Users = (props:PropsType) => {

    const followUser = (id:number, isFollow:boolean) => {
       isFollow? props.unFollow(id) :props.follow(id)
    }

    return (
        <div className={style.container}>
            {props.users.map(user=><div key={user.id}>
              <div>{user.fullName}</div>
              <button onClick={()=>followUser(user.id, user.followed)} >{user.followed ? "unfollow" : "follow"}</button>
              <div>{user.status}</div>
              <div>{user.location.city}</div>
              <div>{user.location.country}</div>

            </div>)}
        </div>
    );
};

