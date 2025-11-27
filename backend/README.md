# E-commerce Backend

Backend API for the e-commerce site, built with Express.js and Supabase (PostgreSQL).

## Prerequisites

- Node.js (v16 or higher)
- A Supabase account and project

## Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Copy the example environment file and update with your credentials:

```bash
cp .env.example .env
```

Edit `.env` with your Supabase credentials:

```
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
JWT_SECRET=your_jwt_secret
PORT=4000
```

### 3. Set Up Database

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Run the SQL from `database/setup.sql` to create the required tables:

```sql
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
```

### 4. Run the Server

```bash
node index.js
```

The server will start on `http://localhost:4000` (or the port specified in `.env`).

## API Endpoints

### General
- `GET /` - Health check

### Products
- `POST /upload` - Upload product image (multipart/form-data)
- `POST /addproduct` - Add a new product
- `POST /removeproduct` - Remove a product by ID
- `GET /allproducts` - Get all products
- `GET /newcollections` - Get latest 8 products
- `GET /popularinwomen` - Get first 4 women category products

### Users
- `POST /signup` - Register a new user
- `POST /login` - User login

### Cart (requires `auth-token` header)
- `POST /addtocart` - Add item to cart
- `POST /removefromcart` - Remove item from cart
- `POST /getcart` - Get cart data

## Image Uploads

Product images are stored locally in the `upload/images` directory and served statically at `/images/*`.
