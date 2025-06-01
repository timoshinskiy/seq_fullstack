import React, {useEffect} from 'react';
import {Grid, Typography} from "@mui/material";
import User from '../../store/user.js';
const ProfileAbout = () => {
    return (
        <div>
            <Typography sx={{mb: 5}} variant={'h3'}>About</Typography>
            <Grid container spacing={2}>
                <Grid size={3}>
                    <Typography variant={'h4'} color={'textSecondary'}>Username</Typography>
                    <Typography variant={'h4'} color={'textSecondary'}>Email</Typography>
                    <Typography variant={'h4'} color={'textSecondary'}>Role</Typography>
                    <Typography variant={'h4'} color={'textSecondary'}>Wallet</Typography>
                </Grid>
                <Grid size={7}>
                    <Typography variant={'h4'} color={'textPrimary'}>{User.username}</Typography>
                    <Typography variant={'h4'} color={'textPrimary'}>{User.email}</Typography>
                    <Typography variant={'h4'} color={'textPrimary'}>{User.role}</Typography>
                    <Typography variant={'h4'} color={'textPrimary'}>{User.wallet} $</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProfileAbout;