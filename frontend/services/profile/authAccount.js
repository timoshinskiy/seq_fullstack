import axios from "axios";
import User from '../../store/user.js';
import {toast} from "react-toastify";
export const tokenLogin = async (token) => {
    try{
        console.log(token)
        const response = await axios.post(`http://${process.env.HOST}:${process.env.PORT}/auth/secretlogin`,{token:token});
        const user = await response.data;
        User.login(user);
        //toast.success('Successfully login!');
    }catch (e) {
        throw e.response.data;
    }
}