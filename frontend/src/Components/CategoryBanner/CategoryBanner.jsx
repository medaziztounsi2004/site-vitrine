import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryBanner.css';

const CategoryBanner = () => {
    const categories = [
        {
            name: 'Living Room',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
            link: '/living'
        },
        {
            name: 'Bedroom',
            image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80',
            link: '/bedroom'
        },
        {
            name: 'Dining',
            image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80',
            link: '/dining'
        },
        {
            name: 'Decor',
            image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80',
            link: '/decor'
        }
    ];

    return (
        <section className="category-banner">
            <div className="category-banner-container">
                <div className="category-banner-header">
                    <span className="category-banner-label">Shop by Room</span>
                    <h2>Explore Our Collections</h2>
                </div>
                <div className="category-grid">
                    {categories.map((category, index) => (
                        <Link to={category.link} className="category-card" key={index}>
                            <img src={category.image} alt={category.name} />
                            <div className="category-overlay">
                                <h3>{category.name}</h3>
                                <span className="category-shop-link">Shop Now →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryBanner;
