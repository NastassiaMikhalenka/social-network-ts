import React from 'react';
import './App.css';
import Dialogs from "./components/dialogs/Dialogs";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {DialogItemType, MessageItemType, PostsDataType} from "./index";


type PropsType = {
    postsData: Array<PostsDataType>
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageItemType>
}

const App = (props: PropsType) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile postsData={props.postsData} />} />
                    <Route path="/dialogs/*" element={<Dialogs
                        messagesData={props.messagesData}
                        dialogsData={props.dialogsData}/>} />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
