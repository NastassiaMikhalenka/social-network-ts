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
    followActionType
    | unfollowActionType
    | setUsersActionType
    | setCurrentPageACType
    | setTotalUserCountACType
    | setToogleIsFetchingACType

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';

export const usersReducer = (state: initialStateType = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? {...user, followed: false} : user)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? {...user, followed: true} : user)
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
        default:
            return state;
    }
};

type followActionType = ReturnType<typeof follow>
type unfollowActionType = ReturnType<typeof unfollow>
type setUsersActionType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalUserCountACType = ReturnType<typeof setTotalUserCount>
type setToogleIsFetchingACType = ReturnType<typeof setToogleIsFetching>

export const follow = (id: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            id: id,
        }
    } as const
}

export const unfollow = (id: number) => {
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
