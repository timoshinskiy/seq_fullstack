import axios from "axios";
import User from '../../store/user.js';
import {toast} from "react-toastify";

export const changePW = async (obj) => {
    try {
        const {username} = User;
        const resObj={text:username,password:obj.oldPassword};
        const response = await axios.post(`http://${process.env.HOST}:${process.env.PORT}/auth/login`,resObj);
        const candidate = await response.data.user;
        if(!candidate){
            throw new Error('Invalid current password!');
        }
        const res = await axios.post(`http://${process.env.HOST}:${process.env.PORT}/auth/changepw`,{username,password:obj.newPassword});
        toast.success(res.data);
    }catch (e) {
        toast.error(e.response.data);
    }
}