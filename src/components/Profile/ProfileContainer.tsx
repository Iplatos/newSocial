import React from 'react';
import {AppDispatch, AppRootStateType} from "../../Redux/ReduxStore";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../Redux/usersReducer";
import axios from "axios";
import {Users} from "../Users/Users";




export type PropsType = {
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

export class UsersAPIComponent extends React.Component<PropsType, any> {

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

        return <Users users={this.props.users} totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} changeCurrentPage = {this.changeCurrentPage} followUser={this.followUser}/>

    }
}


const mapStateToProps = (state:AppRootStateType)=> {
    return {
        posts:state.profile.posts,
        newPostText: state.profile.newPostText
    }
}
const mapDispatchToProps = (dispatch:AppDispatch)=> {
    return {
        follow:(id:number) => {
            dispatch(followAC(id))
        }, unFollow:(id:number) => {
            dispatch(unFollowAC(id))
        },
        setUsers(users:UsersType[]){
            dispatch(setUsersAC(users))
        }
    }
}