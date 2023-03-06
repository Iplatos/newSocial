const initialState = {
    users: [
        {id: 1, followed:false, photos:{small:"", large:""}, name: "", status: "",
            },



    ],
    pageSize:4,
    totalUserCount:10,
    currentPage:3
}
export type UsersType = {id:number,followed:boolean,photos:{small:string, large:string}, name:string, status:string}
type initialType = {
users:UsersType[]
    pageSize:number
    totalUserCount:number
    currentPage:number
}

export const usersReducer = (state:initialType=initialState, action:UsersACType):initialType =>{
    switch (action.type) {
        case "FOLLOW":
return {...state, users: state.users.map(user => user.id === action.id ? {...user, followed : true}
        :
            user
        )
    }
        case "UN-FOLLOW":
            return {...state, users: state.users.map(user => user.id === action.id ? {...user, followed : false}
                    :
                    user
                )
            }
        case "SET-USERS":
            return {...state, users:action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage:action.page}
        case "SET-USER-TOTAL-Count":
            return {...state, totalUserCount:action.users}
        default:
            return state
    }
}


export const followAC = (id:number) => {
    return {type: "FOLLOW", id} as const
}
export const unFollowAC = (id:number) => {
    return {type:"UN-FOLLOW", id}as const
}
export const setUsersAC = (users:UsersType[]) => {
    return {type:"SET-USERS", users}as const
}
export const setCurrentPageAC = (page:number) => {
    return {type:"SET-CURRENT-PAGE", page}as const
}
export const setUserTotalCountAC = (users:number) => {
    return {type:"SET-USER-TOTAL-Count", users}as const
}

export type UsersACType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>| ReturnType<typeof setCurrentPageAC>| ReturnType<typeof setUserTotalCountAC>