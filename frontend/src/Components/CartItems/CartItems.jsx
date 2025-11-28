import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}= useContext(ShopContext);
    const cartHasItems = Object.values(cartItems).some(qty => qty > 0);

    return (
        <div className='cartitems'>
            <h1 className="cartitems-title">Shopping Cart</h1>
            
            {!cartHasItems ? (
                <div className="cartitems-empty">
                    <p>Your cart is empty</p>
                    <a href="/" className="cartitems-continue">Continue Shopping</a>
                </div>
            ) : (
                <>
                    <div className="cartitems-header">
                        <p>Product</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <hr />
                    {all_product.map((e)=>{
                        if(cartItems[e.id]>0)
                        {
                            return <div key={e.id}>
                                <div className="cartitems-format cartitems-header">
                                    <img src={e.image} className='carticon-product-icon' alt={e.name} />
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <span className='cartitems-quantity'>{cartItems[e.id]}</span>
                                    <p>${e.new_price*cartItems[e.id]}</p>
                                    <button className="cartitems-remove" onClick={()=>{removeFromCart(e.id)}}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="18" y1="6" x2="6" y2="18"/>
                                            <line x1="6" y1="6" x2="18" y2="18"/>
                                        </svg>
                                    </button>
                                </div>
                                <hr />
                            </div>
                        }
                        return null;
                    })}
                    <div className="cartitems-down">
                        <div className="cartitems-total">
                            <h2>Order Summary</h2>
                            <div>
                                <div className="cartitems-total-item">
                                    <p>Subtotal</p>
                                    <p>${getTotalCartAmount()}</p>
                                </div>
                                <hr />
                                <div className="cartitems-total-item">
                                    <p>Shipping</p>
                                    <p>Free</p>
                                </div>
                                <hr />
                                <div className="cartitems-total-item total-final">
                                    <h3>Total</h3>
                                    <h3>${getTotalCartAmount()}</h3>
                                </div>
                            </div>
                            <button className="checkout-btn">Proceed to Checkout</button>
                        </div>
                        <div className="cartitems-promocode">
                            <p>Have a promo code?</p>
                            <div className="cartitems-promobox">
                                <input type="text" placeholder='Enter code' />
                                <button>Apply</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CartItems
