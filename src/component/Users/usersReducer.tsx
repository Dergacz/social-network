import {
    ActionsTypes,
    FollowedType,
    SetCurrentPageType, SetToGgleIsFetching,
    SetTotalUserCount,
    SetUsersType,
    UnFollowedType
} from "../../Redux/state";

const FOLLOWED = "FOLLOWED";
const UNFOLLOWED = "UNFOLLOWED";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const SET_TOGGLE_IS_FETCHING = "SET_TOGGLE_IS_FETCHING"

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOWED":{
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
        case "SET_CURRENT_PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
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

export const setCurrentPageAC = (pageNumber: number): SetCurrentPageType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: pageNumber
    }
}

export const setTotalUserCountAC = (totalCount: number): SetTotalUserCount => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalCount
    }
}

export const setToggleIsFetchingAC = (isFetching: boolean): SetToGgleIsFetching => {
    return {
        type: SET_TOGGLE_IS_FETCHING,
        isFetching
    }
}

