import User from '../../store/user.js';
import {toast} from "react-toastify";
import axios from "axios";
export const sendMailVerify = async () => {
    try{
        const response = await axios.put(`http://${process.env.HOST}:${process.env.PORT}/auth/send-verificate`,{email:User.email});
        toast.success(response.data);
    }catch (e) {
        toast.error(e.response.data);
    }
}