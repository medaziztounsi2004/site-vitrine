import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = ({ reviewCount = 0 }) => {
    const scrollToReviews = () => {
        const reviewsSection = document.querySelector('.reviews-section');
        if (reviewsSection) {
            reviewsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="description-nav-box active">Description</div>
                <div 
                    className="description-nav-box" 
                    onClick={scrollToReviews}
                    style={{ cursor: 'pointer' }}
                >
                    Reviews ({reviewCount})
                </div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    SAGE & STONE is your premier destination for luxury home decor, delivering beautifully 
                    crafted pieces that transform your living spaces. We curate an extensive collection of 
                    furniture and decor, from minimalist essentials to statement designer pieces.
                </p>
                <p>
                    Each item in our collection is carefully selected for its quality, design, and ability 
                    to create a harmonious living environment. Our pieces blend Scandinavian simplicity 
                    with modern luxury, creating spaces that feel both inviting and refined.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox
