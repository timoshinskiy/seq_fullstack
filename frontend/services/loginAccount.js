import axios from "axios";
import User from '../store/user.js';
import {toast} from "react-toastify";
export const loginAccount = async (obj) => {
    try{
        const response = await axios.post(`http://${process.env.HOST}:${process.env.PORT}/auth/login`,obj);
        const {user,token} = await response.data;
        console.log(token);
        User.login(user);
        localStorage.setItem('token',token);
        toast.success('Successfully login!');
    }catch (e) {
        throw e.response.data;
    }
}