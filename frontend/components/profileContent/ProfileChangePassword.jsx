import React from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";

const ProfileChangePassword = () => {
    const [inputObj,setInputObj] = useState({})
    return (
        <div>
            <Typography sx={{mb: 5}} variant={'h3'}>Change password</Typography>
            <Grid sx={{ml:2}} container spacing={2}>
                <Grid size={5} sx={{mt:-1}}>
                    <TextField color={'secondary'} type={'password'} sx={{margin: 0,width:'100%',height:'50%'}} label="Current password" variant="standard" />
                    <TextField color={'secondary'} type={'password'} sx={{margin: 0,width:'100%',height:'50%'}} label="New password" variant="standard" />
                    <TextField color={'secondary'} type={'password'} sx={{margin: 0,width:'100%',height:'50%'}} label="Repeat your new password" variant="standard" />
                    <Button sx={{gridDirection:'row',marginRight:'1%',alignSelf:'end'}} color={'secondary'} variant={'outlined'}>Change</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProfileChangePassword;