import React, {useState} from 'react';
import {Menu, MenuItem} from "@mui/material";
import user from "../store/user.js";
import AuthModal from "./AuthModal.jsx";

const HeaderProfileMenu = (props) => {
    const [openAuth,setOpenAuth] = useState(false);

    return (
        <>
            <Menu
                open={props.openMenu}
                onClick={()=>props.setOpenMenu(prev=>!prev)}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: -2,
                            ml:-8,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 50,
                                right:0,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
                <MenuItem onClick={()=>setOpenAuth(true)}>
                    Authorize
                </MenuItem>
            </Menu>
            <AuthModal openModal={openAuth} setOpenModal={setOpenAuth}/>
        </>
    );
};

export default HeaderProfileMenu;