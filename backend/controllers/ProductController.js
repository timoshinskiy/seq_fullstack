const service = require('../service/ProductService.js');
class ProductController {
    async getAll(req,res){
        try{
            const data = await service.getProducts();
            res.status(203).json(data);
        }catch (e) {
            res.status(501).send(e.message);
        }
    }
    async getProduct(req,res){
        try {
            const {id} = req.params;
            const product = await service.getProduct(id);
            if(!product){
                res.status(404).send('Item with this id was not found');
            }
            return res.status(202).json(product);
        }catch (e) {
            res.status(502).send(e.message);
        }
    }
    async create(req,res){
        try{
            const newProduct = await service.createProduct(req.files.file,req.body);
            res.status(201).json(newProduct);
        }catch (e) {
            res.status(501).send(e.message);
        }
    }
    async edit(req,res){
        try{
            const candidate = await service.getProduct(req.params.id);
            if(!candidate){
                res.status(404).send('There are no item with this id');
            }
            const editedProduct = await service.updateProduct(req.params.id, req.body);
            res.status(202).json(editedProduct);
        }catch (e) {
            res.status(501).send(e.message);
        }
    }
    async remove(req,res){
        try{

        }catch (e) {
            res.status(501).send(e.message);
        }
    }
    async order(req,res){
        try{

        }catch (e) {
            res.status(501).send(e.message);
        }
    }
    async buy(req,res){
        try{

        }catch (e) {
            res.status(501).send(e.message);
        }
    }
}

module.exports = new ProductController();