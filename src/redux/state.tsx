import {ActionsTypeForProfile, profileReducer} from "./profile_reducer";
import {ActionsTypeForMessages, dialogsReducer} from "./dialogs_reducer";
import {sidebarReducer} from "./sidebar_reducer";

export type PostsDataType = {
    id: number
    message: string
    likeCount: number
}
export type DialogItemType = {
    id: number
    name: string
}
export type MessageItemType = {
    id: number
    message: string
}
export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string
}
export type MessagesPageType = {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageItemType>
    newMessage: string
}
export type sitebarType = {
    dialogsData: Array<DialogItemType>
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sitebar: sitebarType
}

// export type ActionsType =
//     AddPostActionType |
//     UpdateNewPostTextActionType |
//     AddMessageActionType |
//     UpdateNewPostMessageActionType

// type AddPostActionType = ReturnType<typeof addPostAC>
// type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
// type AddMessageActionType = ReturnType<typeof addMessageAC>
// type UpdateNewPostMessageActionType = ReturnType<typeof updateNewMessageTextAC>

export type ActionsType = ActionsTypeForProfile | ActionsTypeForMessages

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscribe: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    // addPost: () => void
    // updatePostText: (newText: string) => void
    // addMessage: () => void
    // updateMessageText: (newMessage: string) => void
    dispatch: (action: ActionsType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hello?", likeCount: 7},
                {
                    id: 2,
                    message: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer?",
                    likeCount: 8
                }
            ],
            newPostText: "",
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: "Andrey"},
                {id: 2, name: "Masha"},
                {id: 3, name: "Sasha"},
                {id: 4, name: "Timur"},
                {id: 5, name: "Valera"}
            ],
            messagesData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your"},
                {id: 3, message: "Yuu"}
            ],
            newMessage: "",
        },
        sitebar: {
            dialogsData: [
                {id: 1, name: "Andrey"},
                {id: 2, name: "Masha"},
                {id: 3, name: "Sasha"},
                {id: 4, name: "Timur"},
                {id: 5, name: "Valera"}
            ]
        }
    },
    _callSubscribe(state: StateType) {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    // addPost(){
    //     // debugger
    //     let newPost: PostsDataType = {
    //         id: 3,
    //         message: this._state.profilePage.newPostText,
    //         likeCount: 0
    //     }
    //     this._state.profilePage.postsData.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscribe(this._state)
    // },
    // updatePostText(newText: string){
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscribe(this._state)
    // },
    // addMessage(){
    //     let newMessage: MessageItemType = {
    //         id: 4,
    //         message: this._state.messagesPage.newMessage
    //     }
    //     this._state.messagesPage.messagesData.push(newMessage)
    //     this._state.messagesPage.newMessage = ''
    //     this._callSubscribe(this._state)
    // },
    // updateMessageText(newMessage: string){
    //     this._state.messagesPage.newMessage = newMessage
    //     this._callSubscribe(this._state) // был state
    // },
    subscribe(callback: (state: StateType) => void) {
        this._callSubscribe = callback // паттерн
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sitebar = sidebarReducer(this._state.sitebar, action);

        this._callSubscribe(this._state)
        // if(action.type === "ADD_POST"){
        //     let newPost: PostsDataType = {
        //         id: 3,
        //         message: this._state.profilePage.newPostText,
        //         likeCount: 0
        //     }
        //     this._state.profilePage.postsData.push(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._callSubscribe(this._state)
        // }
        // else if(action.type === "UPDATE_NEW_POST_TEXT") {
        //     this._state.profilePage.newPostText = action.newText
        //     this._callSubscribe(this._state)
        // }
        // else if(action.type === "ADD_MESSAGE") {
        //     let newMessage: MessageItemType = {
        //         id: 4,
        //         message: this._state.messagesPage.newMessage
        //     }
        //     this._state.messagesPage.messagesData.push(newMessage)
        //     this._state.messagesPage.newMessage = ''
        //     this._callSubscribe(this._state)
        // }
        // else if (action.type === "UPDATE_NEW_MESSAGE_TEXT"){
        //     this._state.messagesPage.newMessage = action.newMessage
        //     this._callSubscribe(this._state) // был state
        // }
    }
}
// Action Creator - функция, которая возвращает экшен. Объект с типом и данными
// export const addPostAC = (newPost: string) => { // доп функции
//     return {
//         type: "ADD_POST",
//         postText: newPost
//     } as const
// }
// export const updateNewPostTextAC = (newText: string) => {
//     return {
//         type: "UPDATE_NEW_POST_TEXT",
//         newText: newText
//     } as const
// }
// export const addMessageAC = () => {
//     return {
//         type: "ADD_MESSAGE"
//     } as const
// }
// export const updateNewMessageTextAC = (newMessage: string) => {
//     return {
//         type: "UPDATE_NEW_MESSAGE_TEXT",
//         newMessage: newMessage
//     } as const
// }


// let rerenderEntireTree = (state: StateType) => {
//     console.log('State changed')
// }

// export const addPost = () => {
//     // debugger
//     let newPost: PostsDataType = {
//         id: 3,
//         message: state.profilePage.newPostText,
//         likeCount: 0
//     }
//     state.profilePage.postsData.push(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree(state)
// }

// export const updatePostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
// }

// export const addMessage = () => {
//     let newMessage: MessageItemType = {
//         id: 4,
//         message: state.messagesPage.newMessage
//     }
//     state.messagesPage.messagesData.push(newMessage)
//     state.messagesPage.newMessage = ''
//     rerenderEntireTree(state)
// }
//
// export const updateMessageText = (newMessage: string) => {
//     state.messagesPage.newMessage = newMessage
//     rerenderEntireTree(state) // был state
// }
//
// export const subscribe = (observer: () => void) => {
//     rerenderEntireTree = observer // паттерн
// }
// export default state


// switch (action.type) {
//     case "ADD_POST": {
//         let newPost: PostsDataType = {
//             id: 3,
//             message: this._state.profilePage.newPostText,
//             likeCount: 0
//         }
//         this._state.profilePage.postsData.push(newPost)
//         this._state.profilePage.newPostText = ''
//         this._callSubscribe(this._state)
//     }
//     case "UPDATE_NEW_POST_TEXT": {
//         this._state.profilePage.newPostText = action.newText
//         this._callSubscribe(this._state)
//     }
//     case "ADD_MESSAGE": {
//         let newMessage: MessageItemType = {
//             id: 4,
//             message: this._state.messagesPage.newMessage
//         }
//         this._state.messagesPage.messagesData.push(newMessage)
//         this._state.messagesPage.newMessage = ''
//         this._callSubscribe(this._state)
//     }
//     case "UPDATE_NEW_MESSAGE_TEXT": {
//         this._state.messagesPage.newMessage = action.newMessage
//         this._callSubscribe(this._state) // был state
//     }
//     default: this.getState()
// }
