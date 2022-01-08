import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile_reducer";
import {dialogsReducer} from "./dialogs_reducer";
import {sidebarReducer} from "./sidebar_reducer";
import {usersReducer} from "./users_reducer";


export type StateReduxType = typeof state;

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sitebar: sidebarReducer,
    usersPage: usersReducer,
})

export let store = createStore(reducers);
let state = store.getState();