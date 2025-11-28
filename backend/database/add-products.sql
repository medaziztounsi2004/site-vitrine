-- SAGE & STONE - Add 16 New Products to Supabase
-- Run this SQL in your Supabase SQL Editor to add products

-- Add 16 new products to the products table
INSERT INTO products (name, old_price, new_price, category, image) VALUES
-- Original 6 that were missing
('Rattan Pendant Light', 239, 189, 'decor', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=600&q=80'),
('Linen Throw Pillows Set', 99, 79, 'decor', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80'),
('Marble Side Table', 429, 349, 'living', 'https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&w=600&q=80'),
('Woven Storage Baskets', 89, 69, 'decor', 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80'),
('Ceramic Table Lamp', 199, 159, 'decor', 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80'),
('Velvet Ottoman', 379, 299, 'living', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80'),

-- 10 additional new products
('Wooden Bookshelf', 599, 479, 'living', 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=600&q=80'),
('Linen Bedding Set', 299, 229, 'bedroom', 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80'),
('Teak Dining Chairs Set', 899, 699, 'dining', 'https://images.unsplash.com/photo-1551298370-9d3d53bc4f42?auto=format&fit=crop&w=600&q=80'),
('Brass Wall Mirror', 329, 259, 'decor', 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80'),
('Jute Area Rug', 449, 349, 'living', 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=600&q=80'),
('Ceramic Plant Pots Set', 129, 99, 'decor', 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80'),
('Velvet Bed Frame Queen', 1299, 999, 'bedroom', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80'),
('Marble Dining Table', 1499, 1199, 'dining', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80'),
('Scented Candle Set', 79, 59, 'decor', 'https://images.unsplash.com/photo-1602607726786-63e0f43ce58d?auto=format&fit=crop&w=600&q=80'),
('Nightstand with Drawer', 349, 279, 'bedroom', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=600&q=80');
