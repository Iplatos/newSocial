const initialState = {
    users: [
        {id: 1, followed:false, fullName: "Hi! how are you?", status: "Hello", location:{
            city:"SMinsk", country:"Belarus"
            }}, {id: 2,followed:true, fullName: "are you?", status: "NeHello", location:{
            city:"EMinsk", country:"RBelarus"
            }}, {id: 3,followed:false, fullName: "Hi! you?", status: "WWWHello", location:{
            city:"FMinsk", country:"IBelarus"
            }}, {id: 4,followed:true, fullName: "Hi! ?", status: "Halo", location:{
            city:"SMinsk", country:"NeBelarus"
            }},


    ],
}
export type UsersType = {id:number,followed:boolean, fullName:string, status:string, location:{
        city:string, country:string
    }}
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