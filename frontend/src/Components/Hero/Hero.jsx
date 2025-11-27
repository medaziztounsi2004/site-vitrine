import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import hero_video from '../Assets/video.mp4'; // Import the video file

const Hero = () => {
    return (
        <div className='hero'>
            {/* Video Background */}
            <video autoPlay loop muted className="hero-video">
                <source src={hero_video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="hero-left">
                {/* Glitch animation for h2 */}
                <h2 className="glitch" data-text="NEW ARRIVALS ONLY">NEW ARRIVALS ONLY</h2>
               
                <div className="hero-latest-btn">
                    <div className="glitch-btn">Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
