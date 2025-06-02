import axios from "axios";
import User from '../../store/user.js';
import {toast} from "react-toastify";

export const registerAccount = async (obj) => {
    console.log(obj);
    try{
        for(let key in obj){
            if(!obj[key]){
                throw new Error(`${key} must be correctly!`);
            }
        }
        const response = await axios.post(`http://${process.env.HOST}:${process.env.PORT}/auth/registration`,obj);
        const {user,token} = await response.data;
        User.login(user);
        localStorage.setItem('token',token);
        toast("Successfully registration!");
    }catch (e) {
        throw e.response.data;
    }
}