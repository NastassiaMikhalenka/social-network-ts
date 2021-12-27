import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {store} from './redux/redux-store';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    store={store}
                    dispatch={store.dispatch.bind(store)}
                    // state={store.getState()}// state передаем ниже в App
                    //  addPost={store.addPost.bind(store)}
                    //  updatePostText={store.updatePostText.bind(store)}
                    //  addMessage={store.addMessage.bind(store)}
                    //  updateMessageText={store.updateMessageText.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
// type subscribeType = (rerenderEntireTree: () => subscribe) => void
store.subscribe(rerenderEntireTree)
