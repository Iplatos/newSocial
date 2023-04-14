import React from 'react';
import {getUserTC} from "../../redux/usersReducer";
import {useDispatch} from "react-redux";
import Photo from "./../../assets/hqdefault.jpg"
import axios from "axios";

export class UsersC extends React.Component<any, any>{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res=>this.props.setUsers(res.data.items))
    }

    render(){
        return  <div>
            {
                this.props.users.map((u: any) => <li key={u.id}>{u.name}
                    <span>
                <div>
                    <img style={{width:"80px"}} src={u.photos.small !== null ? u.photos.small : Photo}/>
                </div>
<button></button>
                <div>
                     {u.followed}
                </div>
            </span></li>)
            }
        </div>
    }
 }

