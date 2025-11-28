import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import React, { useContext, useRef, useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [scrolled, setScrolled] = useState(false);
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();
    const location = useLocation();
    
    // Check if current page is homepage (has hero image with transparent navbar)
    const isHomepage = location.pathname === '/';
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    
    // Determine navbar class based on homepage status and scroll position
    const getNavbarClass = () => {
        let classes = 'navbar';
        if (scrolled) {
            classes += ' navbar-scrolled';
        } else if (!isHomepage) {
            classes += ' navbar-solid';
        }
        return classes;
    };
    
    return (
        <div className={getNavbarClass()}>
            <Link to='/' className="nav-logo" onClick={() => setMenu("shop")}>
                <span className="logo-text">SAGE & STONE</span>
            </Link>
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setMenu("shop") }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("living") }}>
                    <Link style={{ textDecoration: 'none' }} to='/living'>Living Room</Link>
                    {menu === "living" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("bedroom") }}>
                    <Link style={{ textDecoration: 'none' }} to='/bedroom'>Bedroom</Link>
                    {menu === "bedroom" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("dining") }}>
                    <Link style={{ textDecoration: 'none' }} to='/dining'>Dining</Link>
                    {menu === "dining" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("decor") }}>
                    <Link style={{ textDecoration: 'none' }} to='/decor'>Decor</Link>
                    {menu === "decor" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-icons">
                <SearchBar />
                <div className="nav-login-cart">
                    <Link to='/cart' className="cart-link">
                        <svg className="cart-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 6h15l-1.5 9h-12z"/>
                            <circle cx="9" cy="20" r="1"/>
                            <circle cx="18" cy="20" r="1"/>
                            <path d="M6 6L5 3H2"/>
                        </svg>
                        {getTotalCartItems() > 0 && <div className="nav-cart-count">{getTotalCartItems()}</div>}
                    </Link>
                </div>
                {localStorage.getItem('auth-token')
                    ? <button className="auth-btn" onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>
                        Logout
                      </button>
                    : <Link to='/login' className="auth-btn">
                        Login
                      </Link>}
            </div>
            <div className='nav-dropdown' onClick={dropdown_toggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Navbar;
