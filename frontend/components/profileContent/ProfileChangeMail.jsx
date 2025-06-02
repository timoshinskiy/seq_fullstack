import React, {useState} from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";
import {changeMail} from "../../services/profile/changeMail.js";

const ProfileChangeMail = () => {
    const defaultState = {
        password: '',
        email: '',
    }
    const [inputObj, setInputObj] = useState({...defaultState})
    return (
        <div>
            <Typography sx={{mb: 5}} variant={'h3'}>Change email</Typography>
            <Grid sx={{ml: 2}} container spacing={5}>
                <Grid size={5}>
                    <TextField color={'secondary'}
                               sx={{margin: 0, width: '100%', height: '50%'}} label="Current password"
                               variant="standard"
                               type={'password'}
                               value={inputObj.password}
                               onChange={(e)=>setInputObj({...inputObj,password: e.target.value})}
                    />
                </Grid>
                <Grid size={5}>
                    <TextField color={'secondary'}
                               sx={{margin: 0, width: '100%', height: '50%'}} label="New email"
                               variant="standard"
                               value={inputObj.email}
                               onChange={(e)=>setInputObj({...inputObj,email:e.target.value})}
                    />
                </Grid>
            </Grid>
            <Button sx={{mt:5,ml:2}} onClick={()=>changeMail(inputObj)} color={'secondary'} variant={'outlined'}>Change</Button>
        </div>
    );
};

export default ProfileChangeMail;