const {Router} = require('express');
const router = new Router();
const controller = require('../controllers/ProductController.js')

router.get('/get-all',controller.getAll);
router.get('/get/:id',controller.getProduct);
router.post('/create',controller.create);
router.patch('/edit/:id',controller.edit);
router.delete('/delete/:id',controller.remove);
router.get('/orders/:id',controller.order);
router.put('/buy/:id',controller.buy);

module.exports = router;