import React, { useContext, useState, useEffect, useRef, useCallback } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProcuts';
import Reviews from '../Components/Reviews/Reviews';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
    
    const [reviewCount, setReviewCount] = useState(0);
    const [reviews, setReviews] = useState([]);
    const reviewsRef = useRef(null);

    // Fetch reviews and count
    const fetchReviewData = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:4000/reviews/${productId}`);
            if (response.ok) {
                const data = await response.json();
                setReviews(data || []);
                setReviewCount(data?.length || 0);
            }
        } catch (err) {
            console.error('Error fetching reviews:', err);
            setReviews([]);
            setReviewCount(0);
        }
    }, [productId]);

    useEffect(() => {
        if (productId) {
            fetchReviewData();
        }
    }, [productId, fetchReviewData]);

    // Scroll to reviews section when "Write a Review" is clicked
    const handleWriteReview = () => {
        if (reviewsRef.current) {
            reviewsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox 
                reviewCount={reviewCount} 
                reviews={reviews}
                onWriteReview={handleWriteReview}
            />
            <div ref={reviewsRef}>
                <Reviews 
                    productId={Number(productId)} 
                    onReviewAdded={fetchReviewData}
                />
            </div>
            <RelatedProducts category={product?.category} currentProductId={Number(productId)} />
        </div>
    );
};

export default Product;
