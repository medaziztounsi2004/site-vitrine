import React, { useContext } from 'react';
import './RelatedProducts.css'
import { ShopContext } from '../../Context/ShopContext';
import Item from '../Item/Item';

const RelatedProducts = () => {
    const { all_product } = useContext(ShopContext);
    // Show first 4 products as related products
    const relatedProducts = all_product.slice(0, 4);

    return (
        <div className='relatedproducts'>
            <div className="relatedproducts-header">
                <h2>You May Also Like</h2>
            </div>
           
            <div className='relatedproducts-item'>
                {relatedProducts.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default RelatedProducts
