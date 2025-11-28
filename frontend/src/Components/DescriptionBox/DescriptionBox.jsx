import React, { useState } from 'react';
import Rating from '../Rating/Rating';
import './DescriptionBox.css'

const DescriptionBox = ({ reviewCount = 0, reviews = [], onWriteReview }) => {
    const [activeTab, setActiveTab] = useState('description');

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return '';
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div 
                    className={`description-nav-box ${activeTab === 'description' ? 'active' : ''}`}
                    onClick={() => setActiveTab('description')}
                >
                    Description
                </div>
                <div 
                    className={`description-nav-box ${activeTab === 'reviews' ? 'active' : ''}`}
                    onClick={() => setActiveTab('reviews')}
                >
                    Reviews ({reviewCount})
                </div>
            </div>
            
            <div className="descriptionbox-content">
                {activeTab === 'description' ? (
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
                ) : (
                    <div className="descriptionbox-reviews">
                        {reviews.length > 0 ? (
                            <div className="reviews-list-tab">
                                {reviews.map((review) => (
                                    <div key={review.id} className="review-item-tab">
                                        <div className="review-header-tab">
                                            <div className="reviewer-info-tab">
                                                <span className="reviewer-name-tab">{review.user_name}</span>
                                                <Rating rating={review.rating} size="small" />
                                            </div>
                                            <span className="review-date-tab">{formatDate(review.created_at)}</span>
                                        </div>
                                        {review.review_text && (
                                            <p className="review-text-tab">{review.review_text}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="no-reviews-tab">No reviews yet. Be the first to review this product!</p>
                        )}
                        
                        <button 
                            className="write-review-btn-tab"
                            onClick={onWriteReview}
                        >
                            Write a Review
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DescriptionBox
