import React, { useContext, useState, useEffect } from 'react';
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';
import Rating from '../Rating/Rating';

const categoryNames = {
    living: 'Living Room',
    bedroom: 'Bedroom',
    dining: 'Dining',
    decor: 'Decor'
};

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [ratingData, setRatingData] = useState({ average: 0, count: 0 });
    
    useEffect(() => {
        if (product?.id) {
            fetch(`http://localhost:4000/reviews/${product.id}/average`)
                .then(res => res.json())
                .then(data => setRatingData(data))
                .catch(() => setRatingData({ average: 0, count: 0 }));
        }
    }, [product?.id]);
    
    if (!product) {
        return <div className="productdisplay-loading">Loading...</div>;
    }
    
    return (
        <div className="productdisplay">
           <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="productdisplay-img">
                    <img src={product.image} className="productdisplay-main-img" alt={product.name} />
                </div>
           </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <Rating 
                        rating={Math.round(Number(ratingData.average))} 
                        size="medium" 
                        showCount={true} 
                        count={ratingData.count} 
                    />
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                    {product.old_price > product.new_price && (
                        <div className="productdisplay-right-price-old">${product.old_price}</div>
                    )}
                </div>
                <div className="productdisplay-right-description">
                    Elevate your space with this beautifully crafted piece. Made with premium materials 
                    and designed for both style and functionality, this item brings modern elegance 
                    to any room. Its timeless design ensures it will complement your existing decor 
                    while making a statement of its own.
                </div>
                <div className="productdisplay-right-options">
                    <h3>Quantity</h3>
                    <div className="productdisplay-quantity">
                        <span>1</span>
                    </div>
                </div>
                <button className="productdisplay-add-btn" onClick={()=>{addToCart(product.id)}}>
                    Add to Cart
                </button>
                <div className="productdisplay-meta">
                    <p><span>Category:</span> {categoryNames[product.category] || product.category}</p>
                    <p><span>Tags:</span> Home Decor, Modern, Luxury</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay
