import {usersAPI} from "../API/api";
import {Dispatch} from "redux";

export let initialState = {
    users: [
        // {
        //     id: 1,
        //     avatarUrl: 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg',
        //     followed: true,
        //     fullName: 'Anastasia',
        //     status: 'I am ok',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     avatarUrl: 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg',
        //     followed: false,
        //     fullName: 'Valeria',
        //     status: 'while',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     avatarUrl: 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg',
        //     followed: true,
        //     fullName: 'Alexander',
        //     status: 'do',
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // },
    ] as Array<userType>,
    pageSize: 100 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    followingInProgress: [] as Array<number>,
};

export type userType = {
    name: string
    id: number
    photos: { small: string, large: string }
    status: null | string
    followed: boolean

    // avatarUrl: string;
    // id: number
    // followed: boolean
    // fullName: string
    // status: string
    // location: locationType
}

// type locationType = {
//     city: string
//     country: string
// }

export type initialStateType = typeof initialState;

export type actionsType =
    followSuccessActionType
    | unfollowSuccessActionType
    | setUsersActionType
    | setCurrentPageACType
    | setTotalUserCountACType
    | setToogleIsFetchingACType
    | toogleFollowingProgressType

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';


export const usersReducer = (state: initialStateType = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? {...user, followed: true} : user)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? {...user, followed: false} : user)
            }
        case SET_USERS: {
            return {
                ...state, users: action.payload.users
            }
        }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.payload.currentPage
            }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.payload.totalUsersCount
            }
        }
        case TOOGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.payload.isFetching
            }
        }
        case TOOGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id != action.payload.userId)
            }
        }
        default:
            return state;
    }
};

type followSuccessActionType = ReturnType<typeof followSuccess>
type unfollowSuccessActionType = ReturnType<typeof unfollowSuccess>
type setUsersActionType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalUserCountACType = ReturnType<typeof setTotalUserCount>
type setToogleIsFetchingACType = ReturnType<typeof setToogleIsFetching>
type toogleFollowingProgressType = ReturnType<typeof toogleFollowingProgress>

export const followSuccess = (id: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            id: id,
        }
    } as const
}

export const unfollowSuccess = (id: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            id: id,
        }
    } as const
}

export const setUsers = (users: Array<userType>) => {
    return {
        type: 'SET_USERS',
        payload: {
            users: users,
        }
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {
            currentPage: currentPage,
        }
    } as const
}

export const setTotalUserCount = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        payload: {
            totalUsersCount: totalUsersCount,
        }
    } as const
}

export const setToogleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOOGLE_IS_FETCHING',
        payload: {
            isFetching: isFetching,
        }
    } as const
}

export const toogleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOOGLE_IS_FOLLOWING_PROGRESS',
        payload: {
            isFetching: isFetching,
            userId: userId
        }
    } as const
}

// THUNK
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToogleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(setToogleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUserCount(data.totalCount))
        });
    }
}


export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toogleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toogleFollowingProgress(false, userId))
            });
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toogleFollowingProgress(true, userId))
        usersAPI.unFollow(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toogleFollowingProgress(false, userId))
            });
    }
}
