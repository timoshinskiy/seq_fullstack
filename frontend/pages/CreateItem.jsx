import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import User from '../store/user.js';
import {Button, TextField, Typography} from "@mui/material";
import {createProduct} from "../services/products/createProduct.js";
import {toast} from "react-toastify";
import fs from 'fs';

const CreateItem = () => {
    const defaultValues = {
        product_name: '',
        price: 0,
        short_desc: '',
        full_desc: '',
        userId: User.id,
    }
    const navigate = useNavigate();
    const [inputObj, setInputObj] = useState({...defaultValues});
    const [fileInput, setFileInput] = useState(null);
    useEffect(() => {
        if (User.role !== 'ADMIN') {
            navigate('/');
        }
    }, []);
    const create = () => {
        createProduct(fileInput, inputObj).then(() => {
            toast.success('Product have been successfully create');
            setFileInput(null);
            setInputObj({...defaultValues});
        }).catch();
    }
    return (
        <div className={'page'}>
            <Typography variant={'h3'}>Here you can create your product</Typography>
            <div className={'create-item-inputs'}>
                <TextField
                    style={{gridArea: 'item-1'}}
                    value={inputObj.product_name}
                    onChange={(e) => setInputObj({...inputObj, product_name: e.target.value})}
                    label={'Name of new product'}
                />
                <TextField
                    style={{gridArea: 'item-2'}}
                    value={inputObj.short_desc}
                    onChange={(e) => setInputObj({...inputObj, short_desc: e.target.value})}
                    label={'Enter show description of new product'}
                />
                <TextField
                    style={{gridArea: 'item-3'}}
                    type={'number'}
                    value={inputObj.price}
                    onChange={(e) => setInputObj({...inputObj, price: e.target.value})}
                    label={'Enter a price'}
                />
                <TextField
                    style={{gridArea: 'item-4'}}
                    value={inputObj.full_desc}
                    rows={2}
                    onChange={(e) => setInputObj({...inputObj, full_desc: e.target.value})}
                    label={'Enter full description of product'}
                />
                {
                    fileInput === null
                        ?
                        <label className={'input-file'} style={{gridArea: 'item-5'}}>
                            <span>Выберите изображение</span>
                            <input type={'file'} onChange={(e) => setFileInput(e.target.files[0])}/>
                        </label>
                        :
                        <div style={{gridArea:'item-5',display:'flex',flexDirection:'column', height:'100%', alignItems:'center', paddingTop:15, rowGap:25}}>
                            <Typography variant={'h5'}>{fileInput.name||'File have been loaded'}</Typography>
                            <Button color={'error'} onClick={()=>setFileInput(null)}>Delete</Button>
                        </div>
                }
            </div>
            <Button variant={'outlined'} color={'primary'} onClick={create}>Create</Button>
        </div>
    );
};

export default CreateItem;