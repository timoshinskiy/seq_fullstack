import React, {useState} from 'react';
import user from '../store/user';
import {Card, CardActionArea, Typography} from "@mui/material";
import User from '../store/user.js';
import ProfileAbout from "../components/profileContent/ProfileAbout.jsx";
import ProfileChangePassword from "../components/profileContent/ProfileChangePassword.jsx";
import ProfileChangeMail from "../components/profileContent/ProfileChangeMail.jsx";
import ProfileChangeName from "../components/profileContent/ProfileChangeName.jsx";
import ProfilePayment from "../components/profileContent/ProfilePayment.jsx";
import {camelCaseEditor} from "../services/camelCaseEditor.js";

const Profile = () => {
    const profileInfoVariants = {
        About: <ProfileAbout/>,
        ChangePassword: <ProfileChangePassword/>,
        ChangeEmail: <ProfileChangeMail/>,
        ChangeUsername: <ProfileChangeName/>,
        Payment: <ProfilePayment/>
    }
    const [choise,setChoise] = useState('About');
    return (
        <div className={'page'}>
            <Typography variant={'h2'}>Profile page</Typography>
            <div className="profile-container">
                <div className="profile-content">
                    {profileInfoVariants[choise]}
                </div>
                <div className="profile-menu">
                    <div className="profile-menu-container">
                        {
                            Object.keys(profileInfoVariants).map((item,ind)=>(
                                <div key={ind} onClick={()=>setChoise(item)}>
                                    <Typography sx={{cursor:'default'}} variant={'h5'}>{camelCaseEditor(item)}</Typography>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;