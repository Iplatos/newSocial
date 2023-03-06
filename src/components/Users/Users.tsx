import React from 'react';
import {UsersType} from "../../Redux/usersReducer";
import style from "../../common/Container.module.css";
import userPhoto from "../../assets/images/StoshaGovnozad.jpg";
import axios from "axios";


type PropsType = {
    follow: (id: number) => void
    setUsers: (users: UsersType[]) => void
    unFollow: (id: number) => void
    users: UsersType[]

}

export class Users extends React.Component<PropsType, any> {

    constructor(props:PropsType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => this.props.setUsers(res.data.items))

    }
    
    followUser = (id: number, isFollow: boolean) => {
        isFollow ? this.props.unFollow(id) : this.props.follow(id)
    }

    render() {
        return <div className={style.container}>
            {this.props.users.map(user => <div key={user.id}>
                <div><img style={{width: "100px", height: "100px"}} src={user.photos.small || userPhoto} alt=""/></div>
                <div>{user.name}</div>
                <button
                    onClick={() => this.followUser(user.id, user.followed)}>{user.followed ? "unfollow" : "follow"}</button>
                <div>{user.status}</div>


            </div>)}
        </div>
    }
}