import axios from "axios";

export const getProduct = async (id) => {
  try {
      console.log(id);
      const response = await axios.get(`http://${process.env.HOST}:${process.env.PORT}/catalog/get/${String(id)}`);
      const product = response.data;
      console.log(response);
      if(!product) throw new Error('Bad id of product');
      return product;
  }catch (e) {
      throw e.message;
  }
}