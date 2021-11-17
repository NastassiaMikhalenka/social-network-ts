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
import {StateType} from "./redux/state";

// type PropsType = {
//     postsData: Array<PostsDataType>
//     dialogsData: Array<DialogItemType>
//     messagesData: Array<MessageItemType>
// }
type PropsType = {
    state: StateType
}

const App = (props: PropsType) => { // приняли в пропсах State и сделали типизацию как PropsType, переходим на уроверь ниже в profile или dialogs
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile postsData={props.state.profilePage.postsData} />} />
                    <Route path="/dialogs/*" element={<Dialogs
                        messagesData={props.state.messagesPage.messagesData}
                        dialogsData={props.state.messagesPage.dialogsData}/>} />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
