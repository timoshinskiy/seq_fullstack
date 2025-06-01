const {User} = require("../models/models");
const {Op} = require("sequelize");
const bcrypt = require('bcrypt');
class userService {
    async findUserByEmail(email){
        const candidate = await User.findOne({where: {
            email:email,
            }});
        return candidate;
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
            const user = await User.create({username,email,password:hashPassword});
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
                console.log(key)
                if(key!=='password'){
                    data[key]=user.dataValues[key];
                }
            }
            return data;
        }catch (e) {
            throw e
        }
    }
}

module.exports = new userService();