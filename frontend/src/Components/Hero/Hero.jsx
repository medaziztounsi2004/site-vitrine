import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='hero'>
            {/* Background Image */}
            <div className="hero-background">
                <img 
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80" 
                    alt="Modern living room interior" 
                />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-title">SAGE & STONE</h1>
                <p className="hero-tagline">Elevate Your Space</p>
                <div className="hero-buttons">
                    <Link to="/shop" className="hero-cta hero-cta-primary">
                        Shop Collection
                    </Link>
                    <Link to="/about" className="hero-cta hero-cta-outline">
                        Our Story
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
