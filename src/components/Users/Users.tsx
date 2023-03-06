import style from "../../common/Container.module.css";
import userPhoto from "../../assets/images/StoshaGovnozad.jpg";
import React from "react";
import {UsersType} from "../../Redux/usersReducer";



export const Users =(props:any) => {

    let pagesCount = Math.ceil(props.totalUserCount/props.pageSize)
    let pages = []
    for (let i = 1; i<=pagesCount; i++){
        pages.push(i)
    }


    return (    <div className={style.container}>
        {pages.map(p=><span onClick={()=>props.changeCurrentPage(p)} className={props.currentPage===p ? style.selectedPage : ""} key={p}>{p}</span>)}
        {props.users.map((user:UsersType) => <div key={user.id}>
            <div><img style={{width: "100px", height: "100px"}} src={user.photos.small || userPhoto} alt=""/></div>
            <div>{user.name}</div>
            <button
                onClick={() => props.followUser(user.id, user.followed)}>{user.followed ? "unfollow" : "follow"}</button>
            <div>{user.status}</div>


        </div>)}
    </div>)
}