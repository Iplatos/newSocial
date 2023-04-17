import React from 'react';
import {connect} from "react-redux";
import {
    followUser,
    getTotalUsersCount,
    getUserAC,
    setCurrentPage,
    unFollowUser,
    UsersStateType
} from "../../redux/usersReducer";
import {AppRootStateType} from "../../redux/redux-store";
import axios from "axios";
import UsersPres from "./UsersPres";

class UsersContainer extends React.Component< any, any>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res=>this.props.setUsers(res.data))
    }
    render(){
        return <UsersPres totalUsersCount = {this.props.totalUsersCount}
                          pageSize = {this.props.pageSize}
                          currentPage = {this.props.currentPage}
                          totalCount = {this.props.totalCount}
                          users={this.props.users}
                          setCurrentPage = {this.props.setCurrentPage}
                          setUsers ={this.props.setUsers}
                          follow = {this.props.follow}
                          unFollow = {this.props.unFollow}
        />
    }
}

let mapStateToProps = (state:AppRootStateType) => {
return {
    users: state.usersReducer.items,
    pageSize:state.usersReducer.pageSize,
    totalCount:state.usersReducer.totalCount,
    currentPage:state.usersReducer.currentPage
}
}
let mapDispatchToProps = (dispatch:any) => {
    return {
    follow:(userId:number)=>{
    dispatch(followUser(userId))
    },
        unFollow:(userId:number)=>{
            dispatch(unFollowUser(userId))
        },
        setUsers: (users:UsersStateType)=>{
dispatch(getUserAC(users))},
            getUsersTotalCount: (count:number)=>{
    dispatch(getTotalUsersCount(count))
            },
            setCurrentPage: (pageNumber:number)=>{
    dispatch(setCurrentPage(pageNumber))
            }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer) ;