export type sitebarType = {
    dialogsData: Array<DialogItemType>
}

export type DialogItemType = {
    id: number
    name: string
}
let initialState = {
    dialogsData: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Masha"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Timur"},
        {id: 5, name: "Valera"}
    ]
}
export const sidebarReducer = (state = initialState, action: any): sitebarType => {

    return state
}