import {MessageItemType, MessagesPageType, ActionsType} from "./state";

const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
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
}

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionsType): MessagesPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageItemType = {
                id: 4,
                message: state.newMessage
            }
            state.messagesData.push(newMessage)
            state.newMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.newMessage;
            return state
        default:
            return state;
    }
    // if(action.type === ADD_MESSAGE) {
    //     let newMessage: MessageItemType = {
    //         id: 4,
    //         message: state.newMessage
    //     }
    //     state.messagesData.push(newMessage)
    //     state.newMessage = ''
    //     // this._callSubscribe(this._state)
    // }
    // else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
    //     state.newMessage = action.newMessage
    //     // this._callSubscribe(this._state) // был state
    // }
    // return state;
}

export type ActionsTypeForMessages =
    AddMessageActionType |
    UpdateNewPostMessageActionType


type AddMessageActionType = ReturnType<typeof addMessageAC>
type UpdateNewPostMessageActionType = ReturnType<typeof updateNewMessageTextAC>


export const addMessageAC = () => {
    return {
        type: "ADD_MESSAGE"
    } as const
}
export const updateNewMessageTextAC = (newMessage: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_TEXT",
        newMessage: newMessage
    } as const
}