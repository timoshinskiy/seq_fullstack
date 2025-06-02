import React, {useState} from 'react';
import {Link, useNavigate} from "react-router";
import user from '../store/user.js';
import {Button, Menu, MenuItem} from "@mui/material";
import HeaderProfileMenu from "./HeaderProfileMenu.jsx";
import HeaderLoginMenu from "./HeaderLoginMenu.jsx";


const Header = () => {
    const auth = user.auth;
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const logout = () => {

    }
    return (
        <div className={'header-container'}>
            <div className="header-content">
                <div style={{display:'flex', alignItems:'center', flexDirection:'row', columnGap:'3vw'}}>
                    <Button variant={'text'} color={'inherit'} sx={{fontSize: 17}} onClick={()=>navigate('/')}>Home</Button>
                    <Button variant={'text'} color={'inherit'} sx={{fontSize: 17}} onClick={()=>navigate('/catalog')}>Market</Button>
                </div>
                <div style={{display:'flex', flexDirection:'row', columnGap:"2vw",alignItems:'center'}}>
                    {user.auth===true&&<Button variant={'contained'} onClick={()=>navigate('/profile/?type=Payment')}>Cash: {user.wallet} $</Button>}
                    <Button variant='contained' color={'secondary'}
                            onClick={() => setOpenMenu(prev => !prev)}>{user.auth === true ? user.username.length > 3 ? user.username : "Profile" : "Profile"}</Button>
                </div>
                {
                    user.auth === true ?
                        <HeaderProfileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} navigate={navigate}/> :
                        <HeaderLoginMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
                }
            </div>
        </div>
    );
};

export default Header;