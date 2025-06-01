const {Router} = require('express');
const router = new Router();
const controller = require('../controllers/UserController.js')

router.post('/registration',controller.register);
router.post('/login',controller.login);
router.post('/secretlogin',controller.tokenLogin)
router.get('/wallet/:id/:sum',controller.editWallet);
router.get('/verificate/:uid',controller.approveMail);
router.get('/send-verificate/:uid',controller.sendMail);

module.exports = router;