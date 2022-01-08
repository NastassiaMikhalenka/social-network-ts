import {PostsDataType, ProfilePageType, ActionsType} from "./state";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

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
}

export const profileReducer = (state = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) { // 41 reducer
        case ADD_POST:
            let newPost: PostsDataType = {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;

        default:
            return state;
    }
}
export type ActionsTypeForProfile =
    AddPostActionType |
    UpdateNewPostTextActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

// Action Creator - функция, которая возвращает экшен. Объект с типом и данными
export const addPostAC = (newPost: string) => { // доп функции
    return {
        type: "ADD_POST",
        postText: newPost
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: newText
    } as const
}