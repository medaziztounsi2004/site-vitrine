import React, { useContext } from 'react';
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

const categoryNames = {
    living: 'Living Room',
    bedroom: 'Bedroom',
    dining: 'Dining',
    decor: 'Decor'
};

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    
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
                    <div className="stars">
                        {[1,2,3,4,5].map((star) => (
                            <svg key={star} viewBox="0 0 24 24" fill={star <= 4 ? "var(--gold)" : "#ddd"}>
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        ))}
                    </div>
                    <p>(122 reviews)</p>
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
