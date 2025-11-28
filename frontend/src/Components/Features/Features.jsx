import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: '🚚',
            title: 'Free Shipping',
            description: 'On orders over $500'
        },
        {
            icon: '✨',
            title: 'Premium Quality',
            description: 'Handcrafted excellence'
        },
        {
            icon: '🔄',
            title: 'Easy Returns',
            description: '30 days guarantee'
        },
        {
            icon: '💬',
            title: '24/7 Support',
            description: 'Always here to help'
        }
    ];

    return (
        <div className="features">
            <div className="features-container">
                {features.map((feature, index) => (
                    <div className="feature-item" key={index}>
                        <span className="feature-icon">{feature.icon}</span>
                        <div className="feature-text">
                            <h4>{feature.title}</h4>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
