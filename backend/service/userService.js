const {User} = require("../models/models");
const {Op} = require("sequelize");
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const transporter = require('./mailer');

class userService {
    async findUserByEmail(email){
        try{
            const candidate = await User.findOne({where: {
                    email:email,
                }});
            return candidate;
        }
        catch (e) {
            return null;
        }
    }
    async findUserByUsername(username){
        const candidate = await User.findOne({where: {
            username:username,
            }});
        return candidate;
    }
    async registerUser({username, password, email}) {
        try {
            const hashPassword = await bcrypt.hash(password,6);
            const uid = uuid.v4()
            const user = await User.create({username,email,password:hashPassword,uid});
            return user;
        } catch (e) {
            throw e;
        }
    }
    async login (obj){
        try{
            const {password} = obj;
            let choise = 'username';
            if(obj.text.includes('@')) choise = 'email';
            let inputObj = {};
            inputObj[choise]=obj.text;
            const user = await User.findOne({where: {...inputObj}});
            if(!user)
                throw new Error(`There are no users with this ${choise}`);
            const compareResult = await bcrypt.compare(password,user.password);
            if(compareResult===false){
                throw new Error(`Password is not correct for this ${choise}`);
            }
           // console.log(user.dataValues);
            return {...user.dataValues};
        }catch (e) {
            throw e;
        }
    }
    async tokenLogin (id){
        try {
            const user = await User.findOne({where: {id: id}});
            let data={};
            for(let key in user.dataValues){
                if(key!=='password'){
                    data[key]=user.dataValues[key];
                }
            }
            return data;
        }catch (e) {
            throw e
        }
    }
    async changePW(username,password){
        try {
            const hashPassword = await bcrypt.hash(password,6);
            const user = await User.update({password: hashPassword}, {where: {username: username}});
            if(!user){
                throw new Error('Server have troubles!');
            }
            return "Successfully changed password";
        }catch (e) {
            throw e
        }
    }
    async ChangeMail(username,newEmail){
        try {
            const newUid=uuid.v4();
            const response = await User.update({email: newEmail,email_verified: false,uid:newUid},{where:{username: username}});
            let resObj = {};
            for(let key in response){
                if(key==='password') continue;
                resObj[key] = response[key];
            }
            return resObj.dataValues;
        }catch (e) {
            throw e
        }
    }
    async sendMail(email){
        try {
            const response = await User.findOne({where: {email:email}});
            const {uid} = response.dataValues;
            const message = {
                from: process.env.MAIL_USER,
                to: email,
                subject: 'Approve your email at server account',
                text: '',
                html:
                    `<h1>To approve your account you need to click the button</h1><a href="http://${process.env.HOST}${":"+process.env.PORT}/auth/approve/${uid}"><button>Approve</button></a>`
            }
            const sent = await transporter.sendMail({...message});
        }catch (e) {
            throw e
        }
    }
    async approveMail(uid){
        try{
            const response = await User.update({email_verified: true},{where:{uid: uid}});
        }catch (e) {
            throw e;
        }
    }
}

module.exports = new userService();