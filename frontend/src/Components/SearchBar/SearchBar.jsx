import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import './SearchBar.css';

const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { all_product } = useContext(ShopContext);
    const searchInputRef = useRef(null);
    const searchContainerRef = useRef(null);

    // Filter products based on search term
    useEffect(() => {
        if (searchTerm.trim() === '') {
            setSearchResults([]);
            return;
        }

        const filtered = all_product.filter(product => {
            const searchLower = searchTerm.toLowerCase();
            return (
                product.name.toLowerCase().includes(searchLower) ||
                product.category.toLowerCase().includes(searchLower)
            );
        });

        setSearchResults(filtered.slice(0, 6)); // Limit to 6 results
    }, [searchTerm, all_product]);

    // Focus input when search is opened
    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen]);

    // Close search on clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle keyboard events
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setIsOpen(false);
            setSearchTerm('');
        }
    };

    const handleSearchClick = () => {
        setIsOpen(true);
    };

    const clearSearch = () => {
        setSearchTerm('');
        searchInputRef.current?.focus();
    };

    const handleResultClick = () => {
        setIsOpen(false);
        setSearchTerm('');
    };

    return (
        <div className="search-container" ref={searchContainerRef}>
            <div 
                className={`search-icon ${isOpen ? 'hidden' : ''}`} 
                onClick={handleSearchClick}
                aria-label="Open search"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                </svg>
            </div>
            
            <div className={`search-input-wrapper ${isOpen ? 'active' : ''}`}>
                <svg className="search-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                    ref={searchInputRef}
                    type="text"
                    className={`search-input ${isOpen ? 'active' : ''}`}
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                {searchTerm && (
                    <button className="search-clear" onClick={clearSearch} aria-label="Clear search">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                    </button>
                )}
            </div>

            {isOpen && searchTerm && (
                <div className="search-results">
                    {searchResults.length > 0 ? (
                        <>
                            {searchResults.map((product) => (
                                <Link
                                    key={product.id}
                                    to={`/product/${product.id}`}
                                    className="search-result-item"
                                    onClick={handleResultClick}
                                >
                                    <img src={product.image} alt={product.name} />
                                    <div className="search-result-info">
                                        <span className="search-result-name">{product.name}</span>
                                        <span className="search-result-price">${product.new_price}</span>
                                    </div>
                                </Link>
                            ))}
                            <Link 
                                to="/shop" 
                                className="search-view-all"
                                onClick={handleResultClick}
                            >
                                View all results
                            </Link>
                        </>
                    ) : (
                        <div className="search-no-results">
                            <p>No products found for "{searchTerm}"</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
