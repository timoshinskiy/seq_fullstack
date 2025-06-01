import React, {useEffect} from 'react';
import user from '../store/user.js';
import {useNavigate} from "react-router";
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className={'page'}>
            <h1>This page was not found</h1>
        </div>
    );
};

export default NotFound;