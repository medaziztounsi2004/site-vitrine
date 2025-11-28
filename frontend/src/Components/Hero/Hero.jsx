import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='hero'>
            {/* Background Image */}
            <div className="hero-background">
                <img 
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600" 
                    alt="Luxury home interior" 
                />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-title">SAGE & STONE</h1>
                <p className="hero-tagline">Elevate Your Space</p>
                <Link to="/living" className="hero-cta">
                    Shop Collection
                </Link>
            </div>
        </div>
    );
}

export default Hero;
