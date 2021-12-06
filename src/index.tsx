import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

import state, {
    addMessage,
    addPost, rerenderEntireTreeType,
    StateType,
    subscribe,
    updateMessageText,
    updatePostText
} from './redux/state';

// addPost('blabla')

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}// state передаем ниже в App
                     addPost={addPost}
                     updatePostText={updatePostText}
                     addMessage={addMessage}
                     updateMessageText={updateMessageText}
                    // postsData={postsData}
                    // dialogsData={dialogsData}
                    // messagesData={messagesData}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
// type subscribeType = (rerenderEntireTree: () => subscribe) => void
subscribe(rerenderEntireTree)
