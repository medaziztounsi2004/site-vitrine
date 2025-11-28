import React from 'react';
import './Features.css';

// Minimalist SVG Icons
const TruckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
);

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
);

const RefreshIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/>
        <polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
);

const HeadphonesIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
    </svg>
);

const Features = () => {
    const features = [
        {
            icon: <TruckIcon />,
            title: 'Free Shipping',
            description: 'On orders over $500'
        },
        {
            icon: <CheckIcon />,
            title: 'Premium Quality',
            description: 'Handcrafted excellence'
        },
        {
            icon: <RefreshIcon />,
            title: 'Easy Returns',
            description: '30 days guarantee'
        },
        {
            icon: <HeadphonesIcon />,
            title: '24/7 Support',
            description: 'Always here to help'
        }
    ];

    return (
        <div className="features">
            <div className="features-container">
                {features.map((feature, index) => (
                    <div className="feature-item" key={index}>
                        <div className="feature-icon">{feature.icon}</div>
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
