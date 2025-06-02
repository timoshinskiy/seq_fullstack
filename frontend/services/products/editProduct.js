import axios from "axios";

export const editProduct = async (obj) => {
    try{
        const {id} = obj;
        const resObj = {};
        for(let key in obj){
            if(key!=='id') resObj[key] = obj[key];
        }
        const response = await axios.put(`http://${process.env.HOST}:${process.env.PORT}/c`);
    }catch (e) {

    }
}