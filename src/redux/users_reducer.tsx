export type userType = {
    id: number
    avatarUrl: string
    followed: boolean
    fullName: string
    status: string
    location: locationType
}

type locationType = {
    city: string
    country: string
}

export let initialState = {
    users: [
        // {
        //     id: 1,
        //     avatarUrl: 'https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146',
        //     followed: true,
        //     fullName: 'Anastasia',
        //     status: 'I am ok',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     avatarUrl: 'https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146',
        //     followed: false,
        //     fullName: 'Valeria',
        //     status: 'while',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     avatarUrl: 'https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146',
        //     followed: true,
        //     fullName: 'Alexander',
        //     status: 'do',
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // },
    ] as Array<userType>
};

export type initialStateType = typeof initialState;

type actionsType = followActionType | unfollowActionType | setUsersActionType

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