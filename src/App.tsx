import React from 'react';
import './App.css';
import Dialogs from "./components/dialogs/Dialogs";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {StateReduxType} from "./redux/redux-store"
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/profileInfo/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import {Login} from "./components/Login/Login";


const App = () => { // приняли в пропсах State и сделали типизацию как PropsType, переходим на уроверь ниже в profile или dialogs
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile'
                           element={<ProfileContainer/>}
                    >
                        <Route path=':userId'
                               element={<ProfileContainer/>}
                        />
                    </Route>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
