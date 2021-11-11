import React from 'react';
import './App.css';
import Dialogs from "./components/dialogs/Dialogs";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                    <Route path='profile' element={<Profile />} />
                    <Route path="dialogs" element={<Dialogs />} />
                    </Routes>
                </div>
            </div>
    );
}

export default App;
