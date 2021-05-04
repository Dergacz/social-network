import {ActionsTypes, FollowedType, SetUsersType, UnFollowedType} from "../../Redux/state";

const FOLLOWED = "FOLLOWED";
const UNFOLLOWED = "UNFOLLOWED";
const SET_USERS = "SET_USERS";

// export type UserType = {
//     id: number
//     photoUrl: string
//     followed: boolean
//     name: string
//     status: string
//     location: {
//         city: string
//         country: string
//     }
// }

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
    // location: {
    //     city: string
    //     country: string
    // }
}

export type InitialStateType = {
    users: UserType[]
}

const initialState: InitialStateType = {
    users: []
}


export type UsersInitialStateType = typeof initialState;


export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOWED":{
            debugger
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        }
        case "UNFOLLOWED": {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        }
        case "SET_USERS": {
            return {
                ...state,
                users: action.users
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId: number): FollowedType => {
    return {
        type: FOLLOWED,
        userId
    }
}

export const unFollowAC = (userId: number): UnFollowedType => {
    return {
        type: UNFOLLOWED,
        userId
    }
}

export const setUsersAC = (users: UserType[]): SetUsersType => {
    return {
        type: SET_USERS,
        users
    }
}