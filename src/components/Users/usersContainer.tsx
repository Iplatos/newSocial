import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {followUser, getUserAC, itemType, unFollowUser} from "../../redux/usersReducer";
import {UsersC} from "./UsersС";



let mapStateToProps = (state:any) => {
return {
    users: state.usersReducer.items
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
        setUsers: (users:itemType[])=>{
dispatch(getUserAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersC) ;