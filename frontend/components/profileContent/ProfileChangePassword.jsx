import React, {useRef, useState} from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";
import {changePW} from "../../services/profile/changePW.js";
import {toast} from "react-toastify";

const ProfileChangePassword = () => {
    const checkRepeat = (equals, checked) => {
        setInputObj({...inputObj, repeatPassword: checked});
        if (checked.length === 0) {
            repeatRef.status = 'secondary';
            repeatInput.status = 'secondary';
        } else if (checked !== equals) {
            repeatRef.status = "error";
            repeatInput.status = "error";
        } else if (equals === checked) {
            repeatRef.status = 'success';
            repeatInput.status = 'success';
        }
    }
    const defaultValue = {
        oldPassword: '',
        newPassword: '',
        repeatPassword: '',
    };
    const [inputObj, setInputObj] = useState({...defaultValue});
    const repeatRef = useRef();
    const repeatInput = useRef();
    return (
        <div>
            <Typography sx={{mb: 5}} variant={'h3'}>Change password</Typography>
            <Grid sx={{ml: 2}} container spacing={2}>
                <Grid size={5} sx={{mt: -1}}>
                    <TextField color={'secondary'} type={'password'} value={inputObj.oldPassword}
                               onChange={(e) => setInputObj({...inputObj, oldPassword: e.target.value})}
                               sx={{margin: 0, width: '100%', height: '50%'}} label="Current password"
                               variant="standard"/>
                    <TextField color={repeatInput.status || 'secondary'} ref={repeatInput} type={'password'} value={inputObj.newPassword}
                               onChange={(e) => setInputObj({...inputObj, newPassword: e.target.value})}
                               sx={{margin: 0, width: '100%', height: '50%'}} label="New password" variant="standard"/>
                    <TextField color={repeatRef.status || 'secondary'}
                               ref={repeatRef} type={'password'} value={inputObj.repeatPassword}
                               onChange={(e) => checkRepeat(inputObj.newPassword, e.target.value)}
                               sx={{margin: 0, width: '100%', height: '50%'}} label="Repeat your new password"
                               variant="standard"/>
                    <Button onClick={() => {
                        if(repeatRef.status!=='success'){
                            return toast.error('New password and repeat must be equal')
                        };
                        changePW(inputObj);
                    }} sx={{gridDirection: 'row', marginRight: '1%', alignSelf: 'end'}} color={repeatRef.status||'secondary'}
                            variant={'outlined'}>Change</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProfileChangePassword;