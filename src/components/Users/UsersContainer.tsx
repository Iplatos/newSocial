import {connect} from "react-redux";

import {AppDispatch, AppRootStateType} from "../../Redux/ReduxStore";
import {
    followAC, isUserLoadingAC,
    setCurrentPageAC,
    setUsersAC,
    setUserTotalCountAC,
    unFollowAC,
    UsersType
} from "../../Redux/usersReducer";
import {UsersAPIComponent} from "../Profile/ProfileContainer";

const mapStateToProps = (state:AppRootStateType)=> {
    return {
        users:state.users.users,
        currentPage:state.users.currentPage,
        totalUserCount:state.users.totalUserCount,
        pageSize : state.users.pageSize,
        isLoading: state.users.isLoading
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
    },
        setCurrentPage(p:number){
            dispatch(setCurrentPageAC(p))
        },
        setUsersTotalCount(p:number){
            dispatch(setUserTotalCountAC(p))
        },
        isUserLoading(isLoading:boolean){
            dispatch(isUserLoadingAC(isLoading))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)