import React, {useRef, useState} from 'react';
import {
    Box, Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    Modal,
    OutlinedInput, TextField,
    Typography
} from "@mui/material";
import {AccountCircle, Markunread, Visibility, VisibilityOff} from "@mui/icons-material";
import {loginAccount} from "../services/authenticate/loginAccount.js";
import {toast} from "react-toastify";
import {registerAccount} from "../services/authenticate/registerAccount.js";

const RegisterModal = (props) => {
    const checkRepeat=(equals,checked)=>{
        setInputObj({...inputObj,repeatPassword: checked});
        if(checked.length===0){
            repeatRef.status='primary';
            repeatInput.status='primary';
        }
        else if(checked!==equals){
            repeatRef.status="error";
            repeatInput.status="error";
        }
        else if(equals===checked){
            repeatRef.status='success';
            repeatInput.status='success';
        }
    }
    const repeatRef = useRef();
    const repeatInput = useRef();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
    const [inputObj, setInputObj] = useState({username: '', email:'', password: '', repeatPassword:''});
    return (
        <Modal sx={{display: 'flex', alignItems: "center", justifyContent: "center"}} open={props.openModal}
               onClose={() => props.setOpenModal(false)}>
            <Box sx={{
                flexDirection: "column",
                backgroundColor: 'white',
                padding: "2% 5%",
                minWidth: "30%",
                minHeight: "40%",
                alignItems: "center"
            }}>
                <Typography ml={1} variant={'h4'} mt={5}>Registration</Typography>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    rowGap: '15px',
                    marginTop: '40px',
                    marginBottom: '30px'
                }}>
                    <Box sx={{display: 'flex', alignItems: 'flex-end', width: '100%'}}>
                        <FormControl sx={{m: 1, width: '100%'}} variant="outlined">
                            <InputLabel color={repeatRef.status||'primary'} ref={repeatRef} htmlFor="outlined-adornment-password-repeat">{repeatRef.status==='error'?"Must be equal":repeatRef.status==='success'?"Equal":"Repeat Password"}</InputLabel>
                            <OutlinedInput
                                ref={repeatInput}
                                color={repeatInput.status||'primary'}
                                id="outlined-adornment-password-repeat"
                                value={inputObj.repeatPassword}
                                onChange={(e)=>checkRepeat(inputObj.password,e.target.value)}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPasswordRepeat ? 'hide the password' : 'display the password'
                                            }
                                            onClick={() => setShowPasswordRepeat(prev => !prev)}
                                            // onMouseDown={handleMouseDownPassword}
                                            // onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showPasswordRepeat ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Repeat Password"
                            />
                        </FormControl>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'flex-end', width: '100%'}}>
                        <FormControl sx={{m: 1, width: '100%'}} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                value={inputObj.password}
                                onChange={(e) => setInputObj({...inputObj, password: e.target.value})}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={() => setShowPassword(prev => !prev)}
                                            // onMouseDown={handleMouseDownPassword}
                                            // onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'flex-end', width: '100%', flexDirection: 'row'}}>
                        <AccountCircle sx={{color: 'action.active', mr: 1, ml: 1, my: 0.5}}/>
                        <TextField value={inputObj.username}
                                   onChange={(e) => setInputObj({...inputObj, username: e.target.value})}
                                   sx={{width: '91%'}} id="input-with-sx" label="Username" variant="standard"/>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'flex-end', width: '100%', flexDirection: 'row'}}>
                        <Markunread sx={{color: 'action.active', mr: 1, ml: 1, my: 0.5}}/>
                        <TextField value={inputObj.email}
                                   onChange={(e) => setInputObj({...inputObj, email: e.target.value})}
                                   sx={{width: '91%'}} id="input-with-sx" label="Email" variant="standard"/>
                    </Box>
                </div>
                <div style={{marginLeft: '1%', display: 'flex', flexDirection: 'row'}}>
                    <Button variant={'contained'}
                            onClick={() => registerAccount(inputObj).then(res => props.setOpenModal(false)).catch(err => toast.error(err))}>Register</Button>
                    <Button sx={{ml: 2}} variant={'outlined'} onClick={()=>props.setReg(prev=>!prev)}>Sign in</Button>
                </div>
            </Box>
        </Modal>
    );
};

export default RegisterModal;