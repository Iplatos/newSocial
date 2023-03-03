import {connect} from "react-redux";
import {Users} from "./Users";
import {AppDispatch, AppRootStateType} from "../../Redux/ReduxStore";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../Redux/usersReducer";

const mapStateToProps = (state:AppRootStateType)=> {
    return {
        users:state.users.users
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
export default connect(mapStateToProps, mapDispatchToProps)(Users)