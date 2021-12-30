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
import {StateReduxType} from "./redux/redux-store"
import DialogsContainer from "./components/dialogs/DialogsContainer";
// import {addMessage, StateType, store, StoreType, updatePostText} from "./redux/state";
// import Sitebar from "./components/sitebar/Sitebar";

type PropsType = {
    store: StateReduxType
}


const App = (props: PropsType) => { // приняли в пропсах State и сделали типизацию как PropsType, переходим на уроверь ниже в profile или dialogs
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.store.sitebar}/>
            {/*<Sitebar state={props.store.sitebar}/>*/}
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={
                        <Profile
                            store={props.store.profilePage}
                        />
                    }/>
                    <Route path="/dialogs/*" element={
                        <DialogsContainer
                            store={props.store.messagesPage}
                        />
                    }/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
