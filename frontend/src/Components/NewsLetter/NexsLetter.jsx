import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewsLetter.css'

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubscribe = (e) => {
        e.preventDefault();
        navigate('/login', { state: { email: email, isSignUp: true } });
    };

    return (
        <div className='newsletter'>
            <div className="newsletter-content">
                <h2>Join the SAGE & STONE Family</h2>
                <p>Subscribe for exclusive offers and design inspiration</p>
                <form className="newsletter-form" onSubmit={handleSubscribe}>
                    <input 
                        type="email" 
                        placeholder='Enter your email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default NewsLetter