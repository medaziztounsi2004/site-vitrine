import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import './Reviews.css';

const Reviews = ({ productId, onReviewAdded }) => {
    const [reviews, setReviews] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newReview, setNewReview] = useState({
        user_name: '',
        rating: 5,
        review_text: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    
    // Check if user is logged in
    const isLoggedIn = !!localStorage.getItem('auth-token');

    const fetchReviews = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:4000/reviews/${productId}`);
            if (response.ok) {
                const data = await response.json();
                setReviews(data);
            }
        } catch (err) {
            console.error('Error fetching reviews:', err);
        }
    }, [productId]);

    // Fetch reviews for the product
    useEffect(() => {
        fetchReviews();
    }, [fetchReviews]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!newReview.user_name.trim()) {
            setError('Please enter your name');
            return;
        }
        // review_text is optional - users can submit stars only

        if (!newReview.rating || newReview.rating < 1 || newReview.rating > 5) {
            setError('Please select a rating between 1 and 5 stars');
            return;
        }

        setSubmitting(true);
        setError('');

        try {
            const response = await fetch('http://localhost:4000/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    product_id: productId,
                    user_name: newReview.user_name,
                    rating: newReview.rating,
                    review_text: newReview.review_text
                })
            });

            if (response.ok) {
                // Reset form and refresh reviews
                setNewReview({ user_name: '', rating: 5, review_text: '' });
                setShowForm(false);
                fetchReviews();
                if (onReviewAdded) onReviewAdded();
            } else {
                setError('Failed to submit review. Please try again.');
            }
        } catch (err) {
            setError('Failed to submit review. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const averageRating = reviews.length > 0 
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
        : 0;

    return (
        <div className="reviews-section">
            <div className="reviews-header">
                <h2>Customer Reviews</h2>
                {reviews.length > 0 && (
                    <div className="reviews-summary">
                        <Rating rating={Math.round(averageRating)} size="large" />
                        <span className="average-rating">{averageRating}</span>
                        <span className="total-reviews">Based on {reviews.length} review{reviews.length !== 1 ? 's' : ''}</span>
                    </div>
                )}
            </div>

            {isLoggedIn ? (
                !showForm ? (
                    <button 
                        className="write-review-btn"
                        onClick={() => setShowForm(true)}
                    >
                        Write a Review
                    </button>
                ) : (
                    <form className="review-form" onSubmit={handleSubmit} autoComplete="off">
                        <h3>Write Your Review</h3>
                        
                        <div className="form-group">
                            <label htmlFor="review-name">Your Name</label>
                            <input
                                type="text"
                                id="review-name"
                                name="reviewer_name_field"
                                value={newReview.user_name}
                                onChange={(e) => setNewReview({...newReview, user_name: e.target.value})}
                                placeholder="Enter your name"
                                autoComplete="off"
                            />
                        </div>

                        <div className="form-group">
                            <label>Your Rating</label>
                            <Rating 
                                rating={newReview.rating} 
                                size="large" 
                                interactive={true}
                                onRatingChange={(rating) => setNewReview({...newReview, rating})}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="review-text">Your Review</label>
                            <textarea
                                id="review-text"
                                name="review_content_field"
                                value={newReview.review_text}
                                onChange={(e) => setNewReview({...newReview, review_text: e.target.value})}
                                placeholder="Share your experience with this product..."
                                rows={4}
                                autoComplete="off"
                            />
                        </div>

                        {error && <p className="review-error">{error}</p>}

                        <div className="form-actions">
                            <button 
                                type="button" 
                                className="cancel-btn"
                                onClick={() => {
                                    setShowForm(false);
                                    setError('');
                                }}
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                className="submit-btn"
                                disabled={submitting}
                            >
                                {submitting ? 'Submitting...' : 'Submit Review'}
                            </button>
                        </div>
                    </form>
                )
            ) : (
                <p className="login-prompt">
                    Please <Link to="/login">login</Link> to submit a review
                </p>
            )}
        </div>
    );
};

export default Reviews;
