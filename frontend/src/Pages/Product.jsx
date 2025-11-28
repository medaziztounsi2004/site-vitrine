import React,{useContext} from 'react';
import {ShopContext} from '../Context/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProcuts';
import Reviews from '../Components/Reviews/Reviews';

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams ();
    const product = all_product.find((e)=> e.id === Number(productId));

    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox />
            <Reviews productId={Number(productId)} />
            <RelatedProducts category={product?.category} currentProductId={Number(productId)} />
        </div>
    )
}

export default Product
