const path = require('node:path');
const uid = require('uuid');
const {Product, User} = require('../models/models.js');

class ProductService {
    async getProducts () {
        try {
            const products = await Product.findAll();
            if(!products){
                throw new Error('There are no items');
            }
            return products;
        } catch (e) {
            throw e;
        }
    }

    async getProduct (id) {
        try {
            const product = await Product.findByPk(id);
            return product;
        } catch (e) {
            throw e
        }
    }

    async createProduct (file,obj){
        try {
            let filename;
            if(file){
                filename = uid.v4() + '.png';
                const filepath = path.resolve(__dirname,'..','files',filename);
                await file.mv(filepath);
            }else filename = '4440881-200.png';
            const response = await Product.create({...obj,picture:filename});
            return response;
        }catch (e) {
            throw e;
        }
    }

    async updateProduct (product_id,obj){
        try {
            const response = await Product.update({...obj},{where:{id: product_id},},);
            if(!response){
                throw new Error("Server can't update this product");
            }
        }catch (e) {
            throw e;
        }
    }
}

module.exports = new ProductService();