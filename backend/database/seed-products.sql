-- SAGE & STONE Home Decor Products Seed Data
-- Run this SQL to populate the products table with home decor items
-- NOTE: This will ADD products to existing data. To start fresh, manually delete existing products first.

-- Living Room Products
INSERT INTO products (name, image, category, new_price, old_price, available) VALUES
('Modern Sage Sofa', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800', 'living', 1299.00, 1599.00, TRUE),
('Minimalist Coffee Table', 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800', 'living', 449.00, 549.00, TRUE),
('Velvet Armchair', 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800', 'living', 699.00, 899.00, TRUE),
('Arc Floor Lamp', 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800', 'living', 279.00, 349.00, TRUE);

-- Bedroom Products
INSERT INTO products (name, image, category, new_price, old_price, available) VALUES
('Oak Platform Bed', 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800', 'bedroom', 1899.00, 2299.00, TRUE),
('Floating Nightstand', 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800', 'bedroom', 249.00, 299.00, TRUE),
('Round Wall Mirror', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800', 'bedroom', 189.00, 229.00, TRUE);

-- Dining Products
INSERT INTO products (name, image, category, new_price, old_price, available) VALUES
('Marble Dining Table', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800', 'dining', 1499.00, 1899.00, TRUE),
('Wishbone Chairs (Set of 2)', 'https://images.unsplash.com/photo-1551298370-9d3d53bc4dc3?w=800', 'dining', 599.00, 749.00, TRUE),
('Ceramic Dinnerware Set', 'https://images.unsplash.com/photo-1603199506016-5f36e6d72d31?w=800', 'dining', 149.00, 199.00, TRUE);

-- Decor Products
INSERT INTO products (name, image, category, new_price, old_price, available) VALUES
('Ceramic Vase Set', 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800', 'decor', 89.00, 119.00, TRUE),
('Monstera Plant', 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800', 'decor', 79.00, 99.00, TRUE),
('Abstract Wall Art', 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800', 'decor', 199.00, 259.00, TRUE),
('Scented Candle Set', 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800', 'decor', 49.00, 69.00, TRUE);
