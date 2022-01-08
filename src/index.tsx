import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {store} from './redux/redux-store';
import StoreContext from "./storeContext";
import {Provider} from "react-redux";

let state = store.getState()

let rerenderEntireTree = () => { // state: StateType
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                {/*<Provider store={store}>*/}
                {/*    <App/>*/}
                {/*</Provider>*/}
                <Provider store={store}>
                <App
                    store={state}
                />
                </Provider>
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
