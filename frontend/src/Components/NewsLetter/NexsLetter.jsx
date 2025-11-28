import React from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <div className="newsletter-content">
                <h2>Join the SAGE & STONE Family</h2>
                <p>Subscribe for exclusive offers and design inspiration</p>
                <div className="newsletter-form">
                    <input type="email" placeholder='Enter your email' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter