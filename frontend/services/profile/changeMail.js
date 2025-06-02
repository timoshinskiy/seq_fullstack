import {toast} from "react-toastify";
import axios from "axios";
import User from '../../store/user.js';

export const changeMail = async (obj) => {
    try {
        const {username} = User;
        const logObj = {text: username, password:obj.password};
        const responseLog = await axios.post(`http://${process.env.HOST}:${process.env.PORT}/auth/login`,logObj);
        const user = await responseLog.data;
        if(!user){
            return toast.error('Password that you entered is not valid!')
        }
        const response = await axios.post(`http://${process.env.HOST}:${process.env.PORT}/auth/changemail`,{username,email:obj.email});
        const newUser = await response.data;
        User.login(newUser);
        toast.success('Successfully edit mail');
    }catch (e) {
        toast.error(e.response.data);
    }
}