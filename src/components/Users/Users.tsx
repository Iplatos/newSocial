import React, {useEffect} from 'react';
import {getUserTC} from "../../redux/usersReducer";
import {useDispatch} from "react-redux";
import Photo from "./../../assets/hqdefault.jpg"

export const Users = (props:any) => {
    console.log(props)
    const dispatch = useDispatch()
    const getUsersButtonClick = () => {
        dispatch(getUserTC())
    }
    return (
        <div>
            <button onClick={getUsersButtonClick}>get</button>
           {
                props.users.map((u: any) => <li key={u.id}>{u.name}
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
    );
};

