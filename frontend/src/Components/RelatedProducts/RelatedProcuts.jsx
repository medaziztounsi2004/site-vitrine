import React, { useContext } from 'react';
import './RelatedProducts.css'
import { ShopContext } from '../../Context/ShopContext';
import Item from '../Item/Item';

const RelatedProducts = ({ category, currentProductId }) => {
    const { all_product } = useContext(ShopContext);
    
    // Filter products by same category and exclude current product
    const relatedProducts = all_product
        .filter(p => p.category === category && p.id !== currentProductId)
        .slice(0, 4);

    // If not enough products in same category, show nothing or fewer
    if (relatedProducts.length === 0) {
        return null;
    }

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
