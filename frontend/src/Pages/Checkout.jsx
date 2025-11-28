import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import './CSS/Checkout.css';

const Checkout = () => {
    const { getTotalCartAmount, all_product, cartItems } = useContext(ShopContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'United States'
    });
    const [orderPlaced, setOrderPlaced] = useState(false);

    const cartHasItems = Object.values(cartItems).some(qty => qty > 0);
    const subtotal = getTotalCartAmount();
    const shipping = subtotal > 500 ? 0 : 25;
    const total = subtotal + shipping;

    const cartProductsList = all_product.filter(product => cartItems[product.id] > 0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Map field names to state keys
        const fieldMap = {
            'checkout_first_name_field': 'firstName',
            'checkout_last_name_field': 'lastName',
            'checkout_email_field': 'email',
            'checkout_phone_field': 'phone',
            'checkout_address_field': 'address',
            'checkout_city_field': 'city',
            'checkout_state_field': 'state',
            'checkout_zip_field': 'zipCode',
            'checkout_country_field': 'country'
        };
        const stateKey = fieldMap[name] || name;
        setFormData(prev => ({
            ...prev,
            [stateKey]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate order placement
        setOrderPlaced(true);
    };

    if (orderPlaced) {
        return (
            <div className="checkout">
                <div className="checkout-success">
                    <div className="success-icon">✓</div>
                    <h1>Thank You for Your Order!</h1>
                    <p>Your order has been placed successfully. We'll send you a confirmation email shortly.</p>
                    <p className="order-number">Order #: {Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
                    <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
                </div>
            </div>
        );
    }

    if (!cartHasItems) {
        return (
            <div className="checkout">
                <div className="checkout-empty">
                    <h1>Your cart is empty</h1>
                    <p>Add some items to your cart before checking out.</p>
                    <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout">
            <h1 className="checkout-title">Checkout</h1>
            
            <div className="checkout-container">
                <div className="checkout-form-section">
                    <form onSubmit={handleSubmit} autoComplete="off" data-form-type="other">
                        <div className="form-section">
                            <h2>Contact Information</h2>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        name="checkout_first_name_field"
                                        autoComplete="new-password"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        name="checkout_last_name_field"
                                        autoComplete="new-password"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="checkout_email_field"
                                        autoComplete="new-password"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone *</label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="checkout_phone_field"
                                        autoComplete="new-password"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h2>Shipping Address</h2>
                            <div className="form-group full-width">
                                <label htmlFor="address">Street Address *</label>
                                <input 
                                    type="text" 
                                    id="address" 
                                    name="checkout_address_field"
                                    autoComplete="new-password"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="city">City *</label>
                                    <input 
                                        type="text" 
                                        id="city" 
                                        name="checkout_city_field"
                                        autoComplete="new-password"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">State *</label>
                                    <input 
                                        type="text" 
                                        id="state" 
                                        name="checkout_state_field"
                                        autoComplete="new-password"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="zipCode">ZIP Code *</label>
                                    <input 
                                        type="text" 
                                        id="zipCode" 
                                        name="checkout_zip_field"
                                        autoComplete="new-password"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="country">Country *</label>
                                    <select 
                                        id="country" 
                                        name="checkout_country_field"
                                        autoComplete="off"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="United States">United States</option>
                                        <option value="Canada">Canada</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Australia">Australia</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h2>Payment Information</h2>
                            <div className="payment-placeholder">
                                <p>🔒 Secure payment processing</p>
                                <p className="payment-note">Payment integration coming soon. For demo purposes, click "Place Order" to simulate a successful order.</p>
                            </div>
                        </div>

                        <button type="submit" className="place-order-btn">Place Order</button>
                    </form>
                </div>

                <div className="checkout-summary-section">
                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        
                        <div className="summary-items">
                            {cartProductsList.map((product) => (
                                <div key={product.id} className="summary-item">
                                    <img src={product.image} alt={product.name} />
                                    <div className="summary-item-details">
                                        <p className="item-name">{product.name}</p>
                                        <p className="item-qty">Qty: {cartItems[product.id]}</p>
                                    </div>
                                    <p className="item-price">${product.new_price * cartItems[product.id]}</p>
                                </div>
                            ))}
                        </div>

                        <div className="summary-totals">
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className="summary-row">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                            </div>
                            {shipping === 0 && (
                                <p className="free-shipping-note">You qualify for free shipping!</p>
                            )}
                            <hr />
                            <div className="summary-row total">
                                <span>Total</span>
                                <span>${total}</span>
                            </div>
                        </div>

                        <Link to="/cart" className="back-to-cart">← Back to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
