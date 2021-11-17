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
                    <Route path='/profile' element={<Profile
                        state={props.state.profilePage} />} />
                    <Route path="/dialogs/*" element={<Dialogs
                        state={props.state.messagesPage} />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
