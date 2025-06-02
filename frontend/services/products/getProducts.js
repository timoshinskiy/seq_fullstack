import axios from "axios";
import {toast} from "react-toastify";
import User from "../../store/user.js";

export const getProducts = async () => {
    try{
        const {data} = await axios.get(`http://${process.env.HOST}:${process.env.PORT}/catalog/get-all`);
        const result = data.map(item=>{return{...item,picture:`http://${process.env.HOST}:${process.env.PORT}/${item.picture}`}})
        User.loadProducts(result);
        return result;
    }catch (e) {
        toast.error(e.message);
    }
}