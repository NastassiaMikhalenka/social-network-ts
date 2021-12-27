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
import {ActionsType} from "./redux/state";
import {store, StoreType} from "./redux/redux-store"
// import {addMessage, StateType, store, StoreType, updatePostText} from "./redux/state";
// import Sitebar from "./components/sitebar/Sitebar";

type PropsType = {
    // state: StateType
    store: StoreType
    dispatch: (action: ActionsType) => void
}
// store === state

const App = (props: PropsType) => { // приняли в пропсах State и сделали типизацию как PropsType, переходим на уроверь ниже в profile или dialogs
    const state = store.getState()
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={state.sitebar}/>
            {/*<Sitebar state={props.state.sitebar}/>*/}
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile
                        state={state.profilePage}
                        dispatch={props.dispatch}
                        // addPost={store.addPost.bind(store)}
                        // updatePostText={store.updatePostText.bind(store)}
                    />}/>
                    <Route path="/dialogs/*" element={<Dialogs
                        state={state.messagesPage}
                        dispatch={props.dispatch}
                        // addMessage={store.addMessage.bind(store)}
                        // updateMessageText={store.updateMessageText.bind(store)}
                    />}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
