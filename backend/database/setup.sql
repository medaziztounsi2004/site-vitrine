-- Supabase Database Setup for E-commerce Backend
-- Run this SQL in the Supabase SQL Editor to create the required tables

-- Products table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  image TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  new_price DECIMAL(10,2) NOT NULL,
  old_price DECIMAL(10,2) NOT NULL,
  date TIMESTAMP DEFAULT NOW(),
  available BOOLEAN DEFAULT TRUE
);

-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  cart_data JSONB DEFAULT '{}',
  date TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_users_email ON users(email);
