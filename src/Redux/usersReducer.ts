const initialState = {
    users: [
        {id: 1, followed:false, photos:{small:"", large:""}, name: "Hi! how are you?", status: "Hello",
            }, {id: 2,followed:true,photos:{small:"", large:""}, name: "are you?", status: "NeHello",
            }, {id: 3,followed:false,photos:{small:"", large:""}, name: "Hi! you?", status: "WWWHello",
            }, {id: 4,followed:true,photos:{small:"", large:""}, name: "Hi! ?", status: "Halo",
            },


    ],
}
export type UsersType = {id:number,followed:boolean,photos:{small:string, large:string}, name:string, status:string}
type initialType = {
users:UsersType[]
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

export type UsersACType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>