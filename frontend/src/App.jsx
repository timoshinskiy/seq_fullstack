import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "../components/Header.jsx";
import {observer} from "mobx-react-lite";
import user from '../store/user.js';
import {privateRoutes, publicRoutes} from "./routes.js";
import {Route, Routes} from "react-router";
import {toast, ToastContainer} from "react-toastify";
import {tokenLogin} from "../services/profile/authAccount.js";


const App = observer(() => {
    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            tokenLogin(token).then(res => toast("You're welcome!")).catch(er => toast.error(er));
        }
    }, []);
    return (
        <>
            <ToastContainer/>
            <Header/>
            {
                user.auth === true ?
                    <Routes>
                        {
                            privateRoutes.map(({path, Page}) => (
                                <Route key={path} path={path} element={<Page/>}/>
                            ))
                        }
                    </Routes>
                    :
                    <Routes>
                        {
                            publicRoutes.map(({path, Page}) => (
                                <Route key={path} path={path} element={<Page/>}/>
                            ))
                        }
                    </Routes>
            }
        </>
    );
});

export default App;