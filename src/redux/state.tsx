export type PostsDataType = {
    id: number
    name: string
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

export type StateType = {
    postsData: Array<PostsDataType>
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageItemType>
}

let state: StateType = {
    postsData: [
        {id: 1, name: "Helen", message: "Hello?", likeCount: 7},
        {id: 2, name: "Helen", message: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer?", likeCount: 8}
    ],
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
]
}

export default state

// let postsData: Array<PostsDataType> = [
//     {id: 1, name: "Helen", message: "Hello?", likeCount: 7},
//     {id: 2, name: "Helen", message: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer?", likeCount: 8}
// ]

// let dialogsData: Array<DialogItemType> = [
//     {id: 1, name: "Andrey"},
//     {id: 2, name: "Masha"},
//     {id: 3, name: "Sasha"},
//     {id: 4, name: "Timur"},
//     {id: 5, name: "Valera"}
// ]

// let messagesData: Array<MessageItemType> = [
//     {id: 1, message: "Hi"},
//     {id: 2, message: "How is your"},
//     {id: 3, message: "Yuu"}
// ]