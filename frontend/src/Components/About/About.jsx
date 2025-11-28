import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-image">
                    <img 
                        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" 
                        alt="Elegant living room interior"
                    />
                </div>
                <div className="about-content">
                    <span className="about-label">Our Story</span>
                    <h2>Curating Timeless Spaces</h2>
                    <p>
                        At SAGE & STONE, we believe your home should tell your story. 
                        We curate pieces that blend modern aesthetics with timeless comfort.
                    </p>
                    <p>
                        Every item in our collection is carefully selected to help you create 
                        spaces that inspire and nurture. From handcrafted furniture to artisanal 
                        decor, we bring together the finest elements of contemporary design.
                    </p>
                    <div className="about-stats">
                        <div className="stat">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">50K+</span>
                            <span className="stat-label">Happy Customers</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Curated Products</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
