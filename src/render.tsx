import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

import {addPost, StateType} from './redux/state';

// addPost('blabla')

export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}// state передаем ниже в App
                     addPost={addPost}
                    // postsData={postsData}
                    // dialogsData={dialogsData}
                    // messagesData={messagesData}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

