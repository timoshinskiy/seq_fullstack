import React, {useEffect, useState} from 'react';
import {Grid, Typography} from "@mui/material";
import {getProducts} from "../services/products/getProducts.js";
import CatalogItem from "../components/catalog/CatalogItem.jsx";
import User from "../store/user.js";

const Catalog = () => {
    const width = window.innerWidth;
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        getProducts().then(res=>setProducts(res)).catch();
    },[]);
    return (
        <div className={'page'}>
            <Typography mt={5} variant={'h3'}>Marketplace</Typography>
            <Grid container sx={{mt:15}} style={{marginRight:'auto',marginLeft:'auto'}} spacing={5}>
                {User.items.filter(item=>item.buyed!==true&&item.user_id!==User.id).map(item=>(
                    <Grid size={width>768?2:5}>
                        <CatalogItem product={item}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Catalog;