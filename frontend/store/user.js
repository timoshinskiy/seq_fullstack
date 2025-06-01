import {makeAutoObservable} from "mobx";

class User{
    defaultValues={
        auth:false,
        wallet:0,
        email:'',
        username:'',
        role:'',
        basket:null
    };
    auth=false;
    wallet = 0;
    email = '';
    username = '';
    role = '';
    basket = null;
    constructor() {
        makeAutoObservable(this)
    }

    login(user){
        this.auth = true;
        for(let key in user){
            this[key] = user[key];
        }
    }

    logout(){
        for(let key in this){
            if(key==='defaultValues') continue;
            this[key] = this.defaultValues[key];
        }
        localStorage.removeItem('token');
    }
}

export default new User()