const service = require('../service/userService.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class UserController{
    async register(req,res){
        try {
            const candidateMail = await service.findUserByEmail(req.body.email);
            if(candidateMail)
                return res.status(406).send('User with this email currently registered');
            const candidateUsername = await service.findUserByUsername(req.body.username);
            if(candidateUsername)
                return res.status(406).send('User with this username currently registered');
            const data = await service.registerUser(req.body);
            let resObj={token:'',user:{}};
            for(let key in data){
                if(key!=='password'){
                    resObj.user[key]=data[key];
                }
            }
            const token = jwt.sign({id:data.id}, process.env.JWT_KEY,{expiresIn: '1h'});
            resObj.token=token;
            res.status(201).json(resObj);
        }catch (e) {
            res.status(501).send(e.message);
        }
    }
    async auth(req,res){
        try {

        }catch (e) {

        }
    }
    async login(req,res){
        try {
            if(!req.body.text){
                return res.status(404).send('Enter email or username to login!');
            }
            const user = await service.login(req.body);
            let resObj={token:'',user:{}};
            for(let keys in user){
                if(keys==='password'){continue}
                else {resObj['user'][keys]=user[keys];}
            }
            const token = await jwt.sign({id:user.id},process.env.JWT_KEY,{expiresIn: '2h'});
            resObj.token=token;
            res.status(202).json(resObj);
        }catch (e) {
            res.status(501).send(e.message);
        }
    }
    async tokenLogin(req,res){
        try {
            const {token} = req.body;
            const data = await jwt.verify(token,process.env.JWT_KEY);
            if(!data){
                return res.status(401).send("Token isn't usability now!");
            }
            const user = await service.tokenLogin(data.id);
            res.status(202).json(user);
        }catch (e) {
            res.status(501).send(e);
        }
    }
    async sendMail(req,res){
        try {

        }catch (e) {
            res.status(501).send(e.message);
        }
    }
    async approveMail(req,res){
        try {

        }catch (e) {
            res.status(501).send(e.message);
        }
    }
    async editWallet(req,res){
        try {

        }catch (e) {
            res.status(501).send(e.message);
        }
    }
}

module.exports = new UserController();