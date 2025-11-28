import React, {useContext} from 'react';
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const categoryTitles = {
    living: 'Living Room',
    bedroom: 'Bedroom',
    dining: 'Dining',
    decor: 'Decor'
};

const categoryDescriptions = {
    living: 'Create the perfect gathering space with our curated living room collection',
    bedroom: 'Transform your bedroom into a peaceful sanctuary',
    dining: 'Elevate your dining experience with elegant pieces',
    decor: 'Add the finishing touches that make a house a home'
};

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
    const filteredProducts = all_product.filter(item => item.category === props.category);
    
    return (
        <div className='shop-category'>
            <div className="shopcategory-header">
                <h1>{categoryTitles[props.category] || props.category}</h1>
                <p>{categoryDescriptions[props.category]}</p>
            </div>
            
            <div className="shopcategory-content">
                <div className="shopcategory-indexSort">
                    <p>
                        Showing <span>{filteredProducts.length}</span> products
                    </p>
                    <div className="shopcategory-sort">
                        <span>Sort by</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6"/>
                        </svg>
                    </div>
                </div>
                
                <div className="shopcategory-products">
                    {filteredProducts.map((item, i) => (
                        <Item 
                            key={i} 
                            id={item.id} 
                            name={item.name} 
                            image={item.image} 
                            new_price={item.new_price} 
                            old_price={item.old_price}
                        />
                    ))}
                </div>
                
                {filteredProducts.length === 0 && (
                    <div className="shopcategory-empty">
                        <p>No products found in this category.</p>
                    </div>
                )}
                
                {filteredProducts.length > 8 && (
                    <div className="shopcategory-loadmore">
                        Explore More
                    </div>
                )}
            </div>
        </div>
    )
}

export default ShopCategory
