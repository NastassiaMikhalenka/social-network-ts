import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import state from './redux/state';
import {addPost} from './redux/state';

// addPost('blabla')

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
