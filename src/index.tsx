import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {store} from './redux/redux-store';

let state = store.getState()

let rerenderEntireTree = () => { // state: StateType
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    store={state}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
// type subscribeType = (rerenderEntireTree: () => subscribe) => void
store.subscribe(rerenderEntireTree)

// rerenderEntireTree(store.getState())
// // type subscribeType = (rerenderEntireTree: () => subscribe) => void
// store.subscribe(rerenderEntireTree)
