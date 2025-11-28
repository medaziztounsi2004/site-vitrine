import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            text: "Absolutely love my new sofa! The quality exceeded my expectations.",
            author: "Sarah M.",
            rating: 5
        },
        {
            text: "SAGE & STONE transformed my living room. Highly recommend!",
            author: "James T.",
            rating: 5
        },
        {
            text: "Beautiful pieces, fast delivery, excellent customer service.",
            author: "Emily R.",
            rating: 5
        }
    ];

    const renderStars = (count) => {
        return '★'.repeat(count);
    };

    return (
        <section className="testimonials">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <span className="testimonials-label">Testimonials</span>
                    <h2>What Our Customers Say</h2>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="testimonial-stars">
                                {renderStars(testimonial.rating)}
                            </div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <span className="testimonial-author">— {testimonial.author}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
