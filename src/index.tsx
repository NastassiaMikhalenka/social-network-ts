import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import state from './redux/state';

// let postsData: Array<PostsDataType> = [
//     {id: 1, name: "Helen", message: "Hello?", likeCount: 7},
//     {id: 2, name: "Helen", message: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer?", likeCount: 8}
// ]
//
// export type PostsDataType = {
//     id: number
//     name: string
//     message: string
//     likeCount: number
// }
//
// let dialogsData: Array<DialogItemType> = [
//     {id: 1, name: "Andrey"},
//     {id: 2, name: "Masha"},
//     {id: 3, name: "Sasha"},
//     {id: 4, name: "Timur"},
//     {id: 5, name: "Valera"}
// ]
//
// export type DialogItemType = {
//     id: number
//     name: string
// }
//
// let messagesData: Array<MessageItemType> = [
//     {id: 1, message: "Hi"},
//     {id: 2, message: "How is your"},
//     {id: 3, message: "Yuu"}
// ]
//
// export type MessageItemType = {
//     id: number
//     message: string
// }



ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <App state={state} // state передаем ниже в App
        // postsData={postsData}
        // dialogsData={dialogsData}
        // messagesData={messagesData}
    />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
