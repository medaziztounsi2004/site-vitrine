import React from 'react';
import './Rating.css';

const Rating = ({ rating, size = 'medium', showCount = false, count = 0, interactive = false, onRatingChange = null }) => {
    const stars = [1, 2, 3, 4, 5];
    
    const handleClick = (star) => {
        if (interactive && onRatingChange) {
            onRatingChange(star);
        }
    };

    const handleKeyDown = (e, star) => {
        if (interactive && onRatingChange && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onRatingChange(star);
        }
    };

    return (
        <div className={`rating rating-${size}`}>
            <div className={`stars ${interactive ? 'interactive' : ''}`}>
                {stars.map((star) => (
                    <svg 
                        key={star} 
                        viewBox="0 0 24 24" 
                        fill={star <= rating ? "var(--gold)" : "var(--stone)"}
                        onClick={() => handleClick(star)}
                        onKeyDown={(e) => handleKeyDown(e, star)}
                        tabIndex={interactive ? 0 : -1}
                        role={interactive ? "button" : "img"}
                        aria-label={interactive ? `Rate ${star} star${star > 1 ? 's' : ''}` : `${star} star`}
                        className={interactive ? 'star-interactive' : ''}
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                ))}
            </div>
            {showCount && (
                <span className="rating-count">({count} {count === 1 ? 'review' : 'reviews'})</span>
            )}
        </div>
    );
};

export default Rating;
