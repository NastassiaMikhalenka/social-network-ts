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
    pageSize: 5 as number,
    totalUserCount: 0 as number,
    currentPage: 1 as number,
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

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';

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
        case SET_USERS:
            return {
                ...state, users: [...action.payload.users, ...state.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.payload.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state, totalUserCount: action.payload.totalUserCount
            }
        default:
            return state;
    }
};

type followActionType = ReturnType<typeof followAC>
type unfollowActionType = ReturnType<typeof unfollowAC>
type setUsersActionType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setTotalUserCountACType = ReturnType<typeof setTotalUserCountAC>

export const followAC = (id: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            id: id,
        }
    } as const
}

export const unfollowAC = (id: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            id: id,
        }
    } as const
}

export const setUsersAC = (users: Array<userType>) => {
    return {
        type: 'SET_USERS',
        payload: {
            users: users,
        }
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {
            currentPage: currentPage,
        }
    } as const
}

export const setTotalUserCountAC = (totalUserCount: number) => {
    return {
        type: 'SET_TOTAL_USER_COUNT',
        payload: {
            totalUserCount: totalUserCount,
        }
    } as const
}
