export type rerenderEntireTreeType = (state: StateType) => void
let rerenderEntireTree = (state: StateType) => {
    console.log('State changed')
}
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

let state: StateType = {
    profilePage: {
        postsData: [
            {id: 1, message: "Hello?", likeCount: 7},
            {id: 2, message: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer?", likeCount: 8}
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
        dialogsData:[
            {id: 1, name: "Andrey"},
            {id: 2, name: "Masha"},
            {id: 3, name: "Sasha"},
            {id: 4, name: "Timur"},
            {id: 5, name: "Valera"}
        ]
    }
}


export const addPost = () => {
    // debugger
    let newPost: PostsDataType = {
        id: 3,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updatePostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const addMessage = () => {
    let newMessage: MessageItemType = {
        id: 4,
        message: state.messagesPage.newMessage
    }
    state.messagesPage.messagesData.push(newMessage)
    state.messagesPage.newMessage = ''
    rerenderEntireTree(state)
}

export const updateMessageText = (newMessage: string) => {
    state.messagesPage.newMessage = newMessage
    rerenderEntireTree(state) // был state
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer // паттерн
}

export default state