import React, {useEffect, useState} from 'react';
import {Typography,Button} from "@mui/material";
import {getProducts} from "../../services/products/getProducts.js";
import User from "../../store/user.js";
import EditModal from "./EditModal.jsx";
import {toast} from "react-toastify";

const AdminProducts = () => {
    const [openEditModal,setOpenEditModal] = useState(false);
    const [editProduct,setEditProduct] = useState(null);
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        getProducts().then(res=>setProducts(res.filter(item=>item.userId===User.id))).catch();
    },[]);
    useEffect(()=>{
        openEditModal===false&&setEditProduct(null);
    },[openEditModal]);
    return (
        <div>
            {openEditModal===true&&<EditModal openModal={openEditModal} setOpenModal={setOpenEditModal} product={editProduct} />}
            <Typography sx={{mb: 5}} variant={'h3'}>Here you can admin your products</Typography>
            <div className="admin-catalog">
                {
                    products.length>0
                        ?
                        products.map(item=>(
                            <div className="admin-catalog-product">
                                <img src={item.picture} alt={'item'} style={{width:'100%',height:60}}/>
                                <div style={{display:'flex', flexDirection:'column',justifyContent:'space-around'}}>
                                    <Typography variant={'h6'}>{item.product_name}</Typography>
                                    <Typography variant={'h6'}>{item.short_desc}</Typography>
                                </div>
                                {
                                    item.buyed===false?
                                    <div style={{display:'flex', flexDirection:'column',justifyContent:'space-around'}}>
                                        <Button color={'success'} onClick={()=>{
                                            setEditProduct(item);
                                            setOpenEditModal(true);
                                        }}>Edit</Button>
                                        <Button color={'error'}>Delete</Button>
                                    </div>:
                                        <Button onClick={()=>toast.info(item.buyer)} variant={'contained'} color={'success'}>Show buyer</Button>
                                }
                            </div>
                        ))
                        :
                        <Typography variant={'h5'} color={'red'}>There are no items that you create</Typography>
                }
            </div>
        </div>
    );
};

export default AdminProducts;