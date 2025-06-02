import React, {useEffect, useState} from 'react';
import {Box, Button, Modal, TextField, Typography} from "@mui/material";

const EditModal = (props) => {
    const [inputObj,setInputObj] = useState({});
    useEffect(()=>{
        setInputObj({...props.product});
    },[props.product]);
    return (
        <Modal sx={{display:'flex', alignItems:"center",justifyContent:"center"}} open={props.openModal} onClose={()=>props.setOpenModal(false)}>
            <Box sx={{flexDirection:"column",backgroundColor:'white', padding:"2% 5%", minWidth:"30%",minHeight:"40%",alignItems:"center"}}>
                <Typography variant={'h4'} sx={{mb:4}}>Edit Modal</Typography>
                <div style={{display:'flex',flexDirection:'column', rowGap:'5vh'}}>
                    <TextField color={'info'} value={inputObj.product_name} onChange={(e)=>setInputObj({...inputObj,product_name:e.target.value})} label={'Name'}/>
                    <TextField color={'info'} value={inputObj.price} onChange={(e)=>setInputObj({...inputObj,price:e.target.value})} label={'Price'}/>
                    <TextField color={'info'} value={inputObj.short_desc} onChange={(e)=>setInputObj({...inputObj,short_desc:e.target.value})} label={'Short description'}/>
                    <TextField color={'info'} value={inputObj.full_desc} onChange={(e)=>setInputObj({...inputObj,full_desc:e.target.value})} label={'Full description'}/>
                </div>
                <Button sx={{mt:4}} variant={'outlined'} color={'success'}>Save edit</Button>
            </Box>
        </Modal>
    );
};

export default EditModal;