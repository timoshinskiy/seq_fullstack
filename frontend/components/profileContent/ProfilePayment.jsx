import React, {useState} from 'react';
import {Button, TextField, Typography} from "@mui/material";

const ProfilePayment = () => {
    const [price,setPrice] = useState(0);
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <Typography sx={{mb: 5}} variant={'h3'}>Here you can add money to your wallet</Typography>
            <TextField
                sx={{width:'60%'}}
                value={price}
                type={'number'}
                onChange={(e)=>setPrice(e.target.value)}
                label={'How much money you want to add in wallet'}
            />
            <Button sx={{mt:5}} style={{display:'flex', width:'10%'}} color={'success'} variant={'outlined'}>Payload</Button>
        </div>
    );
};

export default ProfilePayment;