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
};

export type userType = {
    name: string
    id: number
    photos: {small: string, large: string}
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
export type actionsType = followActionType | unfollowActionType | setUsersActionType

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const usersReducer = (state: initialStateType = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? {...user, followed: false} : user)
            }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? {...user, followed: true} : user)
            }
        }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.payload.users]
            }
        default:
            return state;
    }
};

type followActionType = ReturnType<typeof followAC>
type unfollowActionType = ReturnType<typeof unfollowAC>
type setUsersActionType = ReturnType<typeof setUsersAC>

export const followAC = (id: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            id: id
        }
    } as const
}

export const unfollowAC = (id: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            id: id
        }
    } as const
}

export const setUsersAC = (users: Array<userType>) => {
    return {
        type: 'SET_USERS',
        payload: {
            users: users
        }
    } as const
}