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
    totalCount: 30,
    error: null
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
type InitialStateType = {
    items: itemType[]
    totalCount: number
    error: null | string
}

export const usersReducer = (state: InitialStateType = initialState, action: actionType) => {
    switch (action.type) {
        case "GET-USERS":
            return {...state, items: [...state.items, ...action.users]}
        case "FOLLOW-USERS":
            return {...state, items: state.items.map(u => u.id === 4 ? {...u, followed: true} : u)}
        case "UNFOLLOW-USERS":
            return {...state, items: state.items.map(u => u.id === 4 ? {...u, followed: false} : u)}
        default:
            return state
    }


}


type actionType = ReturnType<typeof getUserAC> | ReturnType<typeof unFollowUser> | ReturnType<typeof followUser>

export const getUserAC = (users: itemType[]) => {
    return {type: "GET-USERS", users} as const
}
export const unFollowUser = ( userId: string) => {
    return {type: "FOLLOW-USERS", userId} as const
}
export const followUser = (userId: string) => {
    return {type: "UNFOLLOW-USERS", userId} as const
}
export const getUserTC = () => async (dispatch: Dispatch) => {
    const data = await userApi.getUsers()
    dispatch(getUserAC(data.data.items))
    console.log(data.data.items)
}