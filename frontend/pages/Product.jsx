import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router";
import User from "../store/user.js";
import {Button, Typography} from "@mui/material";
import {getProduct} from "../services/products/getProduct.js";
import {toast} from "react-toastify";

const Product = () => {
    const params = useParams();
    const id = params.id;
    const [product, setProduct] = useState({});
    useEffect(() => {
        getProduct(id).then(res => setProduct({...res})).catch(e => toast.error(e))
    }, []);
    return (
        <div className={'page'}>
            <Typography variant={'h3'}>{product.product_name}</Typography>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{width: '50%'}}>
                    <img src={`http://${process.env.HOST}:${process.env.PORT}/${product.picture}`}
                         style={{width: 800, maxWidth: '100%', height: 600, maxHeight: 600}}/>
                </div>
                <div style={{width: '50%', display:'flex',flexDirection:'column'}}>
                    <Typography style={{marginTop:'8vh'}} variant={'h5'} color={'disabled'}>Price</Typography>
                    <Typography style={{alignSelf:'flex-end'}} variant={'h4'} color={'textPrimary'}>{product.price} $</Typography>

                    <Typography style={{marginTop:'8vh'}} variant={'h5'} color={'disabled'}>Short description</Typography>
                    <Typography style={{alignSelf:'flex-end'}} variant={'h4'} color={'textPrimary'}>{product.short_desc}</Typography>

                    <Typography style={{marginTop:'8vh'}} variant={'h5'} color={'disabled'}>Full description</Typography>
                    <Typography style={{marginRight:1,maxWidth:'50%'}} variant={'h4'} color={'textPrimary'}>{product.full_desc}</Typography>
                </div>
            </div>
            <div style={{display:'flex',flexDirection:'row',columnGap:'2vw'}}>
                <Button variant={'outlined'}>Buy</Button>
                {product.ordered===false&&<Button variant={'outlined'}>Order</Button>}
            </div>
        </div>

    );
};

export default Product;