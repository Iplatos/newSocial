import React from 'react';
import {itemType, UsersStateType} from "../../redux/usersReducer";
import Photo from "./../../assets/hqdefault.jpg"
import axios from "axios";
import s from "./Users.module.css"

export class UsersC extends React.Component< any, any>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res=>this.props.setUsers(res.data))
    }


    render(){
        const onPageClick = (p:number) => {
            this.props.setCurrentPage(p)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(res=>this.props.setUsers(res.data))

        }

       let pageCurrentCount = this.props.totalCount / this.props.pageSize
  let pages = []
        for (let i =1; i<Math.ceil(pageCurrentCount); i++){
            pages.push(i)
        }

        return  <div>
            {pages.map(p=><span onClick={()=>onPageClick(p)} key={p} className={p===this.props.currentPage ? s.selectedPage : ""} >{p}</span>)}

            {
                this.props.users.map((u: itemType) => <li key={u.id}>{u.name}
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

