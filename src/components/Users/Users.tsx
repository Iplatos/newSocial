import React, {useEffect} from 'react';
import style from "../../common/Container.module.css";
import {UsersType} from "../../Redux/usersReducer";
import axios from "axios";
import userPhoto from "./../../assets/images/StoshaGovnozad.jpg"


type PropsType = {
    follow:(id:number)=>void
setUsers:(users: UsersType[])=>void
unFollow:(id:number)=>void
 users: UsersType[]

}

export const Users = (props:PropsType) => {
    console.log(props)

    useEffect(()=>{
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res=> props.setUsers(res.data.items))
    },[])

    const followUser = (id:number, isFollow:boolean) => {
       isFollow? props.unFollow(id) :props.follow(id)
    }

    return (
        <div className={style.container}>
            {props.users.map(user=><div key={user.id}>
                <div><img style={{width:"100px", height:"100px"}} src={user.photos.small ||userPhoto} alt=""/></div>
              <div>{user.name}</div>
              <button onClick={()=>followUser(user.id, user.followed)} >{user.followed ? "unfollow" : "follow"}</button>
              <div>{user.status}</div>



            </div>)}
        </div>
    );
};

