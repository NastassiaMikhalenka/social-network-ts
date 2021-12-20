import {PostsDataType, ProfilePageType, ActionsType} from "./state";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";


export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type){ // 41 reducer
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

        default: return state;
    }
    // if(action.type === ADD_POST){ // 38video
    //     let newPost: PostsDataType = {
    //         id: 3,
    //         message: state.newPostText,
    //         likeCount: 0
    //     }
    //     state.postsData.push(newPost)
    //     state.newPostText = ''
    //     // this._callSubscribe(this._state)
    // }
    // else if(action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText
    //     // this._callSubscribe(this._state)
    // }
    // return state
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