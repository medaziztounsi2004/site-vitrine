import React from 'react';
import './Offers.css'
import { Link } from 'react-router-dom';

const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-content">
                <div className="offers-left">
                    <span className="offers-label">Limited Time</span>
                    <h2>Exclusive</h2>
                    <h2>Offers For You</h2>
                    <p>Up to 40% off on best-selling home decor pieces</p>
                    <Link to="/living" className="offers-btn">Shop Now</Link>
                </div>
                <div className="offers-right">
                    <img 
                        src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600" 
                        alt="Luxury velvet armchair"
                    />
                </div>
            </div>
        </div>
    )
}

export default Offers
