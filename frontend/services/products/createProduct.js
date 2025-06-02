import {toast} from "react-toastify";
import axios from "axios";

export const createProduct = async (file,obj) => {
    try {
        const formData = new FormData();
        formData.set('file',file);
        for(let key in obj){
            formData.set(key,obj[key]);
        }
        const response = await axios.post(`http://${process.env.HOST}:${process.env.PORT}/catalog/create`,formData);
    }catch (e) {
        throw e.message
    }
}