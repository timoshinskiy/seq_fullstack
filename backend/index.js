const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
const fileUpload = require('express-fileupload');
const sequelize = require('./db');
const models = require('./models/models');
const productRouter = require('./routers/productsRouter');
const userRouter = require('./routers/userRouter');

dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.static('./files'));
app.use(express.json());
app.use(fileUpload({}));
app.use('/catalog',productRouter);
app.use('/auth',userRouter);


const start = async() => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port,()=>{
            console.log('Server is running on port ' + port);
        })
    }catch (e) {
        console.log(e);
    }
}

start();