import React from 'react';
import {connect} from "react-redux";
import {
    followUser,
    getTotalUsersCount,
    getUserAC, isFetchingUsers,
    setCurrentPage,
    unFollowUser,
    UsersStateType
} from "../../redux/usersReducer";
import {AppRootStateType} from "../../redux/redux-store";
import axios from "axios";
import UsersPres from "./UsersPres";
import jdunIMG from "../../assets/1485429629134035534.gif"


class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.toggleIsFetching(false)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => this.props.setUsers(res.data))
        this.props.toggleIsFetching(true)
    }
    onPageChanged = (p: number)=> {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(res =>
            this.props.setUsers(res.data))
    }
    a=4
    render() {

        return <>
            {this.props.isFetching ? <img src={jdunIMG}/> : null}
            <UsersPres totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       totalCount={this.props.totalCount}
                       users={this.props.users}
                       setCurrentPage={this.props.setCurrentPage}
                       setUsers={this.props.setUsers}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       isFetching={this.props.isFetching}
                       toggleIsFetching = {this.props.toggleIsFetching}
                       onPageChanged = {this.onPageChanged}
                       a={this.props.a}
            /></>
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersReducer.items,
        pageSize: state.usersReducer.pageSize,
        totalCount: state.usersReducer.totalCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followUser(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowUser(userId))
        },
        setUsers: (users: UsersStateType) => {
            dispatch(getUserAC(users))
        },
        getUsersTotalCount: (count: number) => {
            dispatch(getTotalUsersCount(count))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPage(pageNumber))
        },
        toggleIsFetching: (value:boolean) => {
            dispatch(isFetchingUsers(value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);