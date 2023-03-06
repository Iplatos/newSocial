import {connect} from "react-redux";
import {Users} from "./Users"
import {AppDispatch, AppRootStateType} from "../../Redux/ReduxStore";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUserTotalCountAC,
    unFollowAC,
    UsersType
} from "../../Redux/usersReducer";

const mapStateToProps = (state:AppRootStateType)=> {
    return {
        users:state.users.users,
        currentPage:state.users.currentPage,
        totalUserCount:state.users.totalUserCount,
        pageSize : state.users.pageSize
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)