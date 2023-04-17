import React from 'react';
import s from "./Users.module.css";
import {itemType} from "../../redux/usersReducer";
import Photo from "../../assets/hqdefault.jpg";
import axios from "axios";

const UsersPres = (props: any) => {
    const onPageClick = (p: number) => {
        props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${props.pageSize}`).then(res => props.setUsers(res.data))

    }
    console.log(props)
    let pageCurrentCount = props.totalCount / props.pageSize
    let pages = []
    for (let i = 1; i < Math.ceil(pageCurrentCount); i++) {
        pages.push(i)
    }


    return (
        <div>
            {pages.map(p => <span onClick={() => onPageClick(p)} key={p}
                                  className={p === props.currentPage ? s.selectedPage : ""}>{p}</span>)}

            {
                props.users.map((u: itemType) => <li key={u.id}>{u.name}
                    <span>
                <div>
                    <img style={{width: "80px"}} src={u.photos.small !== null ? u.photos.small : Photo}/>
                </div>
                        {u.followed ? <button onClick={() => {
                                props.follow(u.id)
                            }}>follow</button> :
                            <button onClick={() => {
                                props.unFollow(u.id)
                            }}>unfollow</button>
                        }
            </span></li>)
            }
        </div>
    );
};

export default UsersPres;