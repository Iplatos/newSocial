import React, {useEffect} from 'react';
import {getUserTC} from "../../redux/usersReducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../redux/redux-store";

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
                    <img src={u.photos.small}/>
                </div>
                <div>
                    {u.id}
                </div>
                <div>
                     {u.followed}
                </div>
            </span></li>)
            }
        </div>
    );
};

