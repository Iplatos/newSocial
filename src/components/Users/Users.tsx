import React from 'react';
import {setCurrentPageAC, UsersType} from "../../Redux/usersReducer";
import style from "../../common/Container.module.css";
import userPhoto from "../../assets/images/StoshaGovnozad.jpg";
import axios from "axios";


type PropsType = {
    follow: (id: number) => void
    setUsers: (users: UsersType[]) => void
    unFollow: (id: number) => void
    setCurrentPage:(p:number)=>void
    setUsersTotalCount:(p:number)=>void
    users: UsersType[]
    pageSize:number
    totalUserCount:number
    currentPage:number

}

export class Users extends React.Component<PropsType, any> {

    constructor(props:PropsType) {
        super(props);

    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => this.props.setUsers(res.data.items))
    }


    followUser = (id: number, isFollow: boolean) => {
        isFollow ? this.props.unFollow(id) : this.props.follow(id)
    }
    changeCurrentPage = (p:number) => {
       this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(res => this.props.setUsers(res.data.items))

    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount/this.props.pageSize)
        console.log(pagesCount)
        let pages = []
        for (let i = 1; i<=pagesCount; i++){
            pages.push(i)
        }
        return <div className={style.container}>
            {pages.map(p=><span onClick={()=>this.changeCurrentPage(p)} className={this.props.currentPage===p ? style.selectedPage : ""} key={p}>{p}</span>)}
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