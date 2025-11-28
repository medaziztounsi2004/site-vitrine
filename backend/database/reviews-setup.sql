-- Reviews Table Setup for E-commerce Backend
-- Run this SQL in the Supabase SQL Editor to create the reviews table

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  user_name VARCHAR(100) NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  review_text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_reviews_product_id ON reviews(product_id);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at DESC);

-- Add some sample reviews for existing products
INSERT INTO reviews (product_id, user_name, rating, review_text) VALUES
(1, 'Sarah M.', 5, 'Absolutely love this sofa! The sage color is even more beautiful in person. Very comfortable and well-made.'),
(1, 'John D.', 4, 'Great quality and looks amazing in our living room. Delivery was fast too.'),
(2, 'Emily R.', 5, 'Perfect coffee table! Matches our decor beautifully and the minimalist design is exactly what we wanted.'),
(3, 'Michael T.', 5, 'The velvet texture is so luxurious. This chair has become my favorite reading spot.'),
(4, 'Lisa K.', 4, 'Beautiful lamp that provides great ambient lighting. Assembly was easy.'),
(7, 'Amanda P.', 5, 'This bed is stunning! Solid oak construction and the platform design is perfect for our modern bedroom.'),
(8, 'David L.', 4, 'Love the floating nightstand. Saves space and looks very sleek.'),
(13, 'Jennifer H.', 5, 'The dining table is a showstopper! Gets compliments from every guest.'),
(19, 'Robert G.', 5, 'Beautiful wall art that really ties our living room together.'),
(19, 'Michelle W.', 4, 'Great quality print and frame. Colors are vibrant and true to the photos.');
