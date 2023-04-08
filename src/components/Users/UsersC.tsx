import React from "react";
import style from "../../common/Container.module.css";
import {UsersType} from "../../Redux/usersReducer";
import userPhoto from "../../assets/images/StoshaGovnozad.jpg";
import axios from "axios";


export class UsersC extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)

    }



    render() {
        return (<div className={style.container}>
{/*            {pages.map(p => <span onClick={() => this.props.changeCurrentPage(p)}
                                  className={this.props.currentPage === p ? style.selectedPage : ""} key={p}>{p}</span>)}*/}
            {this.props.users.map((user: UsersType) => <div key={user.id}>
                <div><img style={{width: "100px", height: "100px"}} src={user.photos.small || userPhoto} alt=""/></div>
                <div>{user.name}</div>
                <button
                    onClick={() => this.props.followUser(user.id, user.followed)}>{user.followed ? "unfollow" : "follow"}</button>
                <div>{user.status}</div>


            </div>)}
        </div>)
    }
}