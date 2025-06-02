import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate} from "react-router";

const CatalogItem = (props) => {
    const navigate=useNavigate();
    const {product} = props;
    return (
        <Card>
            <CardActionArea onClick={()=>navigate(`/product/${product.id}`)}>
                <CardMedia
                    component={'img'}
                    height={150}
                    image={product.picture}
                />
                <CardContent>
                    <Typography variant={'h5'}>{product.product_name}</Typography>
                    <Typography variant={'h6'}>{product.short_desc||'Without description'}</Typography>
                    <Typography variant={'h5'}>{String(product.price)} $</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={()=>navigate(`/product/${product.id}`)}>
                    See more
                </Button>
            </CardActions>
        </Card>
    );
};

export default CatalogItem;