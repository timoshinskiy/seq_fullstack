const {Router} = require('express');
const router = new Router();
const controller = require('../controllers/UserController.js')

router.post('/registration',controller.register);
router.post('/login',controller.login);
router.post('/changepw',controller.changePW);
router.post('/secretlogin',controller.tokenLogin);
router.post('/changemail',controller.changeMail);
router.get('/wallet/:id/:sum',controller.editWallet);
router.get('/approve/:uid',controller.approveMail);
router.put('/send-verificate',controller.sendMail);

module.exports = router;