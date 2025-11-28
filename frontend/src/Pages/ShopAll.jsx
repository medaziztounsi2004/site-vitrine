import React, { useContext, useState, useMemo } from 'react';
import './CSS/ShopAll.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low-high', label: 'Price: Low to High' },
    { value: 'price-high-low', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' },
    { value: 'name-az', label: 'Name: A-Z' }
];

const categoryFilters = [
    { value: 'all', label: 'All Products' },
    { value: 'living', label: 'Living Room' },
    { value: 'bedroom', label: 'Bedroom' },
    { value: 'dining', label: 'Dining' },
    { value: 'decor', label: 'Decor' }
];

const ShopAll = () => {
    const { all_product } = useContext(ShopContext);
    const [sortBy, setSortBy] = useState('featured');
    const [filterCategory, setFilterCategory] = useState('all');
    const [showSortDropdown, setShowSortDropdown] = useState(false);

    const filteredProducts = useMemo(() => {
        if (filterCategory === 'all') {
            return all_product;
        }
        return all_product.filter(item => item.category === filterCategory);
    }, [all_product, filterCategory]);

    const sortedProducts = useMemo(() => {
        const products = [...filteredProducts];
        
        switch (sortBy) {
            case 'price-low-high':
                return products.sort((a, b) => a.new_price - b.new_price);
            case 'price-high-low':
                return products.sort((a, b) => b.new_price - a.new_price);
            case 'newest':
                return products.sort((a, b) => b.id - a.id);
            case 'name-az':
                return products.sort((a, b) => a.name.localeCompare(b.name));
            case 'featured':
            default:
                return products;
        }
    }, [filteredProducts, sortBy]);

    const handleSortChange = (value) => {
        setSortBy(value);
        setShowSortDropdown(false);
    };

    const currentSortLabel = sortOptions.find(opt => opt.value === sortBy)?.label || 'Featured';

    return (
        <div className='shop-all'>
            <div className="shop-all-header">
                <h1>Shop Collection</h1>
                <p>Discover our curated selection of modern home decor</p>
            </div>
            
            <div className="shop-all-content">
                <div className="shop-all-filters">
                    <div className="filter-categories">
                        {categoryFilters.map((cat) => (
                            <button 
                                key={cat.value}
                                className={`filter-btn ${filterCategory === cat.value ? 'active' : ''}`}
                                onClick={() => setFilterCategory(cat.value)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                    
                    <div className="shop-all-controls">
                        <p>
                            Showing <span>{sortedProducts.length}</span> products
                        </p>
                        <div className="shop-all-sort-wrapper">
                            <div 
                                className="shop-all-sort" 
                                onClick={() => setShowSortDropdown(!showSortDropdown)}
                            >
                                <span>Sort by: {currentSortLabel}</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6"/>
                                </svg>
                            </div>
                            {showSortDropdown && (
                                <div className="shop-all-sort-dropdown">
                                    {sortOptions.map((option) => (
                                        <div 
                                            key={option.value}
                                            className={`sort-option ${sortBy === option.value ? 'active' : ''}`}
                                            onClick={() => handleSortChange(option.value)}
                                        >
                                            {option.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
                <div className="shop-all-products">
                    {sortedProducts.map((item) => (
                        <Item 
                            key={item.id} 
                            id={item.id} 
                            name={item.name} 
                            image={item.image} 
                            new_price={item.new_price} 
                            old_price={item.old_price}
                        />
                    ))}
                </div>
                
                {sortedProducts.length === 0 && (
                    <div className="shop-all-empty">
                        <p>No products found. Try adjusting your filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShopAll;
