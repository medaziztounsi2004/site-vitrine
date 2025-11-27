
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import user_icon from '../Assets/user.png'; // Import the user icon
import nav_dropdown from '../Assets/nav_dropdown.png';
import logout from '../Assets/logout.png'; // Import the logout icon
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import React, { useContext, useRef, useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();
    
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setMenu("shop") }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("mens") }}>
                    <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
                    {menu === "mens" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("womens") }}>
                    <Link style={{ textDecoration: 'none' }} to='womens'>Women</Link>
                    {menu === "womens" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("kids") }}>
                    <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
                    {menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-icons">
                <div className="nav-login-cart">
                    <Link to='/cart'>
                        <img className='cart-img' src={cart_icon} alt="" />
                    </Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
                {localStorage.getItem('auth-token')
                    ?<img onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} className='logout' src={logout} alt="Logout" />
                    : <Link to='/login'>
                        <img className='user-img' src={user_icon} alt="User" /> {/* Replace with user image */}
                    </Link>}
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        </div>
    );
};

export default Navbar;
