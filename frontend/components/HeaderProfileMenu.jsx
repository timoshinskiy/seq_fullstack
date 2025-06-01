import React from 'react';
import {Menu, MenuItem} from "@mui/material";
import user from "../store/user.js";

const HeaderProfileMenu = (props) => {
    return (
        <>
            <Menu
                open={props.openMenu}
                onClick={() => props.setOpenMenu(prev => !prev)}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: -2,
                            ml: -9,
                            position: 'fixed',
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem onClick={() => props.navigate('/profile')}>
                    {user.username.length > 0 ? user.username : 'Profile'}
                </MenuItem>
                {user.role === 'ADMIN' &&
                    <MenuItem onClick={()=>props.navigate('/catalog/create')}>
                        Create product
                    </MenuItem>}
                <MenuItem onClick={() => props.navigate('/catalog')}>
                    Market
                </MenuItem>
                <MenuItem onClick={() => props.navigate('/basket')}>
                    Basket
                </MenuItem>
                <MenuItem onClick={() => user.logout()}>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
};

export default HeaderProfileMenu;