import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    followUser,
    getTotalUsersCount,
    getUserAC,
    itemType, setCurrentPage,
    unFollowUser,
    UsersStateType
} from "../../redux/usersReducer";
import {UsersC} from "./UsersС";
import {AppRootStateType} from "../../redux/redux-store";



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
follow:(userId:string)=>{
    dispatch(followUser(userId))
    },
        unFollow:(userId:string)=>{
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersC) ;