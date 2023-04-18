import {Dispatch} from "redux";
import {userApi} from "../api/api";

const initialState = {
    items: [
        {
            name: "",
            id: 1,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: false
        },
    ],
    totalCount: 0,
    error: null,
    pageSize:10,
    currentPage:2,
    isFetching:false
}

export type itemType = {
    name: string
    id: number
    photos: {
        small: string | null
        large: string | null
    }
    status: null | string
    followed: boolean
}
export type UsersStateType = {
    items: itemType[]
    totalCount: number
    error: null | string
    pageSize:number,
    currentPage:number,
    isFetching: boolean
}

export const usersReducer = (state: UsersStateType = initialState, action: actionType) => {
    switch (action.type) {
        case "GET-USERS":
            return {...state, ...action.users}
        case "FOLLOW-USERS":
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case "UNFOLLOW-USERS":
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case "GET-TOTAL-USERS-COUNT":
            return {...state, totalCount: action.totalCount}
        case "SET-CURRENT-PAGE":
            return {...state,currentPage:action.pageNumber}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching:action.value}
        default:
            return state
    }


}


type actionType = ReturnType<typeof getUserAC> | ReturnType<typeof unFollowUser> | ReturnType<typeof followUser> | ReturnType<typeof getTotalUsersCount> | ReturnType<typeof setCurrentPage> | ReturnType<typeof isFetchingUsers>


export const getUserAC = (users: UsersStateType) => {
    return {type: "GET-USERS", users } as const
}
export const unFollowUser = ( userId: number) => {
    return {type: "FOLLOW-USERS", userId} as const
}
export const followUser = (userId: number) => {
    return {type: "UNFOLLOW-USERS", userId} as const
}
export const getTotalUsersCount = (totalCount: number) => {
    return {type: "GET-TOTAL-USERS-COUNT", totalCount} as const
}
export const setCurrentPage = (pageNumber: number) => {
    return {type: "SET-CURRENT-PAGE", pageNumber} as const
}
export const isFetchingUsers = (value:boolean) => {
    return {type: "TOGGLE-IS-FETCHING", value} as const
}
export const getUserTC = () => async (dispatch: Dispatch) => {
    const data = await userApi.getUsers()
    dispatch(getUserAC(data.data.items))
    dispatch(getTotalUsersCount(data.data.totalCount))
    return data.data.items
}