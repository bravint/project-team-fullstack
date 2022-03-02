import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import CreateProfile from './pages/register/CreateProfile';
import CreateUser from './pages/register/CreateUser';
import Footer from './Footer';
import Forum from './pages/forum/Forum';
import Home from './pages/home/Home';
import Header from './Header';
import Leaderboard from './pages/leaderboard/Leaderboard';
import LeftMenu from './LeftMenu';
import Login from './pages/login/Login';

import {LOCAL_STORAGE, INT_LINK} from './config'

import './styles/app.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    //on page load / refresh, token persists but user details stored in state are lost, useEffects restore previous session

    useEffect(() => {
        localStorage.getItem(LOCAL_STORAGE.TOKEN) ? setIsLoggedIn(true) : setIsLoggedIn(false);
    }, []);

    useEffect(() => {
        if (user || !isLoggedIn) return
        //fetchUser from id in token decodeToken
        let userId;
    }, [isLoggedIn]);

    return (
        <div className="app">
            <Header 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn} 
                user={user}
            />
            <LeftMenu />
            <Routes>
                <Route 
                    path={INT_LINK.HOME}
                    element={<Home />} 
                />
                <Route
                    path={INT_LINK.CREATE_PROFILE}
                    element={
                        <CreateProfile
                            user={user}
                            setUser={setUser}
                        />
                    }
                />
                <Route
                    path={INT_LINK.CREATE_USER}
                    element={
                        <CreateUser 
                            setUser={setUser}
                            setIsLoggedIn={setIsLoggedIn} 
                        />
                    }
                />
                <Route
                    path={INT_LINK.LOGIN}
                    element={
                        <Login 
                            setUser={setUser}
                            setIsLoggedIn={setIsLoggedIn} 
                        />}
                />
                <Route
                    path={INT_LINK.FORUM}
                    element={
                    <Forum 
                        user={user} 
                    />}
                />
                <Route
                    path={INT_LINK.LEADERBOARD}
                    element={
                        <Leaderboard 
                            user={user} 
                        />
                    }
                />
                <Route 
                    path={INT_LINK.NOT_FOUND}
                    element={<Home />} 
                />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;