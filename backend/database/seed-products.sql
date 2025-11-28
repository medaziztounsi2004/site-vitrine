-- SAGE & STONE Home Decor Products Seed Data
-- Run this SQL to populate the products table with home decor items
-- NOTE: This will clear existing products and add fresh data

-- Clear existing products
DELETE FROM products;
ALTER SEQUENCE products_id_seq RESTART WITH 1;

-- LIVING ROOM (6 products)
INSERT INTO products (name, image, category, new_price, old_price, available) VALUES
('Modern Sage Sofa', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80', 'living', 1299.00, 1599.00, true),
('Minimalist Coffee Table', 'https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=800&q=80', 'living', 449.00, 549.00, true),
('Velvet Armchair', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=800&q=80', 'living', 699.00, 899.00, true),
('Arc Floor Lamp', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80', 'living', 279.00, 349.00, true),
('Wooden Bookshelf', 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=80', 'living', 599.00, 749.00, true),
('Linen Throw Pillows', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80', 'living', 89.00, 119.00, true);

-- BEDROOM (6 products)
INSERT INTO products (name, image, category, new_price, old_price, available) VALUES
('Oak Platform Bed', 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80', 'bedroom', 1899.00, 2299.00, true),
('Floating Nightstand', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80', 'bedroom', 249.00, 299.00, true),
('Round Wall Mirror', 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80', 'bedroom', 189.00, 229.00, true),
('Linen Bedding Set', 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80', 'bedroom', 299.00, 399.00, true),
('Wooden Dresser', 'https://images.unsplash.com/photo-1551298370-9d3d53bc4dc3?auto=format&fit=crop&w=800&q=80', 'bedroom', 799.00, 999.00, true),
('Bedside Lamp', 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80', 'bedroom', 129.00, 159.00, true);

-- DINING (5 products)
INSERT INTO products (name, image, category, new_price, old_price, available) VALUES
('Marble Dining Table', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80', 'dining', 1499.00, 1899.00, true),
('Wishbone Chairs Set', 'https://images.unsplash.com/photo-1551298370-9d3d53bc4f42?auto=format&fit=crop&w=600&q=80', 'dining', 599.00, 749.00, true),
('Ceramic Dinnerware Set', 'https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=600&q=80', 'dining', 149.00, 199.00, true),
('Glass Pendant Light', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=800&q=80', 'dining', 329.00, 399.00, true),
('Table Runner', 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=800&q=80', 'dining', 49.00, 69.00, true);

-- DECOR (6 products)
INSERT INTO products (name, image, category, new_price, old_price, available) VALUES
('Monstera Plant', 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80', 'decor', 79.00, 99.00, true),
('Abstract Wall Art', 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80', 'decor', 199.00, 259.00, true),
('Scented Candle Set', 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?auto=format&fit=crop&w=800&q=80', 'decor', 49.00, 69.00, true),
('Woven Basket Set', 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80', 'decor', 79.00, 99.00, true),
('Decorative Throw Blanket', 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=800&q=80', 'decor', 119.00, 149.00, true),
('Macrame Wall Hanging', 'https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?auto=format&fit=crop&w=800&q=80', 'decor', 69.00, 89.00, true);

-- NEW PRODUCTS (6 additional products)
INSERT INTO products (name, image, category, new_price, old_price, available) VALUES
('Rattan Pendant Light', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=600&q=80', 'decor', 189.00, 239.00, true),
('Linen Throw Pillows Set', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80', 'living', 79.00, 99.00, true),
('Marble Side Table', 'https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&w=600&q=80', 'living', 349.00, 429.00, true),
('Woven Storage Baskets', 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80', 'decor', 69.00, 89.00, true),
('Ceramic Table Lamp', 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80', 'bedroom', 159.00, 199.00, true),
('Velvet Ottoman', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80', 'living', 299.00, 379.00, true);
