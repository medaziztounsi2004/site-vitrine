require('dotenv').config();
const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const supabase = require('./config/supabase');

const port = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'secret_ecom';

app.use(express.json());
app.use(cors());

// API creation
app.get("/", (req, res) => {
    res.send('Express App is Running');
});

// Image storage
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});
const upload = multer({ storage: storage });

// Creating upload
app.use('/images', express.static('upload/images'));

app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Creating API for adding products
app.post('/addproduct', async (req, res) => {
    try {
        const { data: insertedProduct, error } = await supabase
            .from('products')
            .insert([{
                name: req.body.name,
                image: req.body.image,
                category: req.body.category,
                new_price: req.body.new_price,
                old_price: req.body.old_price,
            }])
            .select()
            .single();

        if (error) {
            console.log("Error:", error);
            return res.status(500).json({ success: false, error: error.message });
        }

        console.log(insertedProduct);
        console.log("Saved");
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Creating API For deleting Products
app.post('/removeproduct', async (req, res) => {
    try {
        const { error } = await supabase
            .from('products')
            .delete()
            .eq('id', req.body.id);

        if (error) {
            return res.status(500).json({ success: false, error: error.message });
        }

        console.log("Removed");
        res.json({
            success: true,
            name: req.body.name
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Creating API for getting all products
app.get('/allproducts', async (req, res) => {
    try {
        const { data: products, error } = await supabase
            .from('products')
            .select('*')
            .order('id', { ascending: true });

        if (error) {
            return res.status(500).json({ success: false, error: error.message });
        }

        console.log("All Products Fetched");
        res.send(products);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Creating Endpoint for registering the user
app.post('/signup', async (req, res) => {
    try {
        // Check if user already exists
        const { data: existingUser, error: checkError } = await supabase
            .from('users')
            .select('id')
            .eq('email', req.body.email)
            .maybeSingle();

        if (existingUser) {
            return res.status(400).json({ success: false, errors: 'existing email' });
        }

        // Create initial cart data
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        // Insert new user
        const { data: newUser, error } = await supabase
            .from('users')
            .insert([{
                name: req.body.username,
                email: req.body.email,
                password: req.body.password,
                cart_data: cart,
            }])
            .select()
            .single();

        if (error) {
            return res.status(500).json({ success: false, errors: error.message });
        }

        const data = {
            user: {
                id: newUser.id
            }
        };

        const token = jwt.sign(data, JWT_SECRET);
        res.json({ success: true, token });
    } catch (error) {
        res.status(500).json({ success: false, errors: error.message });
    }
});

// Creating Endpoint for user login
app.post('/login', async (req, res) => {
    try {
        const { data: user, error } = await supabase
            .from('users')
            .select('*')
            .eq('email', req.body.email)
            .maybeSingle();

        if (error || !user) {
            return res.json({ success: false, errors: "Wrong Email Id" });
        }

        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            };
            const token = jwt.sign(data, JWT_SECRET);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, errors: "Wrong Password" });
        }
    } catch (error) {
        res.status(500).json({ success: false, errors: error.message });
    }
});

// Creating endpoint for newcollection data
app.get('/newcollections', async (req, res) => {
    try {
        const { data: products, error } = await supabase
            .from('products')
            .select('*')
            .order('date', { ascending: false })
            .limit(8);

        if (error) {
            return res.status(500).json({ success: false, error: error.message });
        }

        console.log("NewCollection Fetched");
        res.send(products);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Popular in women
app.get('/popularinwomen', async (req, res) => {
    try {
        const { data: products, error } = await supabase
            .from('products')
            .select('*')
            .eq('category', 'women')
            .limit(4);

        if (error) {
            return res.status(500).json({ success: false, error: error.message });
        }

        console.log("Popular in women fetched");
        res.send(products);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Creating middleware to fetch user
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ errors: "Please authenticate using valide " });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ errors: 'Invalid Token' });
    }
};

// Creating endpoint for adding products in cartdata
app.post('/addtocart', fetchUser, async (req, res) => {
    try {
        console.log("Added", req.body.itemId);

        const { data: userData, error: fetchError } = await supabase
            .from('users')
            .select('cart_data')
            .eq('id', req.user.id)
            .single();

        if (fetchError) {
            return res.status(500).json({ error: fetchError.message });
        }

        let cartData = userData.cart_data || {};
        cartData[req.body.itemId] = (cartData[req.body.itemId] || 0) + 1;

        const { error: updateError } = await supabase
            .from('users')
            .update({ cart_data: cartData })
            .eq('id', req.user.id);

        if (updateError) {
            return res.status(500).json({ error: updateError.message });
        }

        res.send("Added");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Creating endpoint to remove product from item cart
app.post('/removefromcart', fetchUser, async (req, res) => {
    try {
        console.log("removed", req.body.itemId);

        const { data: userData, error: fetchError } = await supabase
            .from('users')
            .select('cart_data')
            .eq('id', req.user.id)
            .single();

        if (fetchError) {
            return res.status(500).json({ error: fetchError.message });
        }

        let cartData = userData.cart_data || {};
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        }

        const { error: updateError } = await supabase
            .from('users')
            .update({ cart_data: cartData })
            .eq('id', req.user.id);

        if (updateError) {
            return res.status(500).json({ error: updateError.message });
        }

        res.send("Removed");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Creating endpoint to get cartdata
app.post('/getcart', fetchUser, async (req, res) => {
    try {
        console.log("GetCart");

        const { data: userData, error } = await supabase
            .from('users')
            .select('cart_data')
            .eq('id', req.user.id)
            .single();

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.json(userData.cart_data || {});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, (error) => {
    if (!error) {
        console.log('Server Running on Port ' + port);
    } else {
        console.log('Error: ' + error);
    }
});
