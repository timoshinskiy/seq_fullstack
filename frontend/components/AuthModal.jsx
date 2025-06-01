import React, {useEffect, useState} from 'react';
import LoginModal from "./LoginModal.jsx";
import RegisterModal from "./RegisterModal.jsx";

const AuthModal = (props) => {
    const [register,setRegister] = useState(false);
    if(register === false){
        return <LoginModal setReg={setRegister} openModal={props.openModal} setOpenModal={props.setOpenModal}/>
    }
    else{
        return <RegisterModal setReg={setRegister} openModal={props.openModal} setOpenModal={props.setOpenModal}/>
    }
};

export default AuthModal;