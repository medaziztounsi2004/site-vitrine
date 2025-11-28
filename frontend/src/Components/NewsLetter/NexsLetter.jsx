import React from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <div className="newsletter-content">
                <h2>Join Our Community</h2>
                <p>Subscribe to receive exclusive offers, design tips, and early access to new arrivals</p>
                <div className="newsletter-form">
                    <input type="email" placeholder='Enter your email' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter