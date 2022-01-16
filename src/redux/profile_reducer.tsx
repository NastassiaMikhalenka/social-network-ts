type PostsDataType = {
    id: number
    message: string
    likeCount: number
}

export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string
    profile: any
}

type ProfileContactType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContactType
    photos: {
        small: string
        large: string
    }
}

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    postsData: [
        {id: 1, message: "Hello?", likeCount: 7},
        {
            id: 2,
            message: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer?",
            likeCount: 8
        }
    ],
    newPostText: "",
    profile: null,
}

export const profileReducer = (state = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) { // 41 reducer
        case ADD_POST:
            let newPost: PostsDataType = {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                newPostText: '',
                postsData: [newPost, ...state.postsData]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}
export type ActionsType =
    AddPostActionType |
    UpdateNewPostTextActionType |
    setUserProfileType

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
type setUserProfileType = ReturnType<typeof setUserProfileAC>


// Action Creator - функция, которая возвращает экшен. Объект с типом и данными
export const addPostAC = () => { // доп функции
    return {
        type: "ADD_POST"
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: newText,
    } as const
}

export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: "SET_USER_PROFILE",
        profile: profile,
    } as const
}