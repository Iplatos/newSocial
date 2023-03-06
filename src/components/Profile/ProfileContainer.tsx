import React from 'react';
import {AppDispatch, AppRootStateType} from "../../Redux/ReduxStore";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../Redux/usersReducer";

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