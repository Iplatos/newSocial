import React from 'react';
import {connect} from "react-redux";
import {
    followUser,
    getTotalUsersCount,
    getUser,
    isFetchingUsers,
    setCurrentPage,
    unFollowUser
} from "../../redux/usersReducer";
import {AppRootStateType} from "../../redux/redux-store";
import axios from "axios";
import UsersPres from "./UsersPres";
import Preloader from "../../common/Preloader/Preloader";


class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.isFetchingUsers(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => this.props.getUser(res.data))
        this.props.isFetchingUsers(false)
    }

    onPageChanged = (p: number) => {
        this.props.isFetchingUsers(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(res =>
            this.props.getUser(res.data))
        this.props.isFetchingUsers(false)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersPres totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       totalCount={this.props.totalCount}
                       users={this.props.users}
                       setCurrentPage={this.props.setCurrentPage}
                       setUsers={this.props.getUser}
                       follow={this.props.followUser}
                       unFollow={this.props.unFollowUser}
                       isFetching={this.props.isFetching}
                       isFetchingUsers={this.props.isFetchingUsers}
                       onPageChanged={this.onPageChanged}

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


export default connect(mapStateToProps, {
     followUser, unFollowUser, getUser,
    getTotalUsersCount, setCurrentPage, isFetchingUsers})(UsersContainer);