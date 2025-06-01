import React, {useState} from 'react';
import {
    Container,
    Modal,
    Box,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton, Typography, Button
} from "@mui/material";
import {AccountCircle, Visibility, VisibilityOff} from '@mui/icons-material';
import {loginAccount} from "../services/loginAccount.js";
import {toast} from "react-toastify";

const LoginModal = (props) => {

    const [showPassword,setShowPassword] = useState(false);
    const [inputObj,setInputObj] = useState({text:'',password:''});
    return (
        <Modal sx={{display:'flex', alignItems:"center",justifyContent:"center"}} open={props.openModal} onClose={()=>props.setOpenModal(false)}>
            <Box sx={{flexDirection:"column",backgroundColor:'white', padding:"2% 5%", minWidth:"30%",minHeight:"40%",alignItems:"center"}}>
                <Typography ml={1} variant={'h4'} mt={5}>Login</Typography>
                <div style={{display:'flex',flexDirection:'column-reverse',rowGap:'20px', marginTop:'40px', marginBottom:'30px'}}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', width:'100%' }}>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                value={inputObj.password}
                                onChange={(e)=>setInputObj({...inputObj,password:e.target.value})}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={()=>setShowPassword(prev=>!prev)}
                                            // onMouseDown={handleMouseDownPassword}
                                            // onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', width:'100%', flexDirection:'row'}}>
                        <AccountCircle sx={{ color: 'action.active', mr:1, ml:1, my:0.5}} />
                        <TextField value={inputObj.text} onChange={(e)=>setInputObj({...inputObj,text:e.target.value})} sx={{width:'91%'}} id="input-with-sx" label="Username\Email" variant="standard" />
                    </Box>
                </div>
                <div style={{marginLeft:'1%',display:'flex',flexDirection:'row'}}>
                    <Button variant={'contained'} onClick={()=>loginAccount(inputObj).then(res=>props.setOpenModal(false)).catch(err=>toast.error(err))}>Login</Button>
                    <Button sx={{ml:2}} variant={'outlined'} onClick={()=>props.setReg(prev=>!prev)}>Sign up</Button>
                </div>
            </Box>
        </Modal>
    );
};

export default LoginModal;