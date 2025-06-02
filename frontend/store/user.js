import {makeAutoObservable} from "mobx";

class User {
    defaultValues = {
        auth: false,
        wallet: 0,
        email: '',
        username: '',
        role: '',
        basket: null,
        id:null,
        email_verified: false,
    };
    id= null;
    auth = false;
    email_verified = false;
    wallet = 0;
    email = '';
    username = '';
    role = '';
    basket = null;
    items = [];

    constructor() {
        makeAutoObservable(this)
    }


    login(user) {
        this.auth = true;
        for (let key in user) {
            this[key] = user[key];
        }
    }

    logout() {
        for (let key in this.defaultValues) {
            if (key === 'defaultValues') continue;
            this[key] = this.defaultValues[key];
        }
        localStorage.removeItem('token');
    }

    loadProducts(arr) {
        this.items = [...arr];
    }

    addProduct(obj) {
        this.items.push(obj);
    }

    deleteProduct(product_id) {
        this.items = [...this.items.filter(({id}) => id !== product_id)];
    }

    orderProduct(product_id) {
        this.items = this.items.map(item => item.id === product_id ? {...item, ordered: true} : item);
    }

    unOrderProduct(product_id) {
        this.items = this.items.map(item => item.id === product_id ? {...item, ordered: false} : item);
    }

    buyProduct(product_id, user_email) {
        this.items = this.items.map(item => item.id === product_id ? {...item, buyed: true, buyer: user_email} : item);
    }

    getAdminProducts(id) {
        return this.items.filter(item => item.user_id === id);
    }
}

export default new User()