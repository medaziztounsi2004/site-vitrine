import React, {useContext, useState, useMemo} from 'react';
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const categoryTitles = {
    living: 'Living Room',
    bedroom: 'Bedroom',
    dining: 'Dining',
    decor: 'Decor'
};

const categoryDescriptions = {
    living: 'Create the perfect gathering space with our curated living room collection',
    bedroom: 'Transform your bedroom into a peaceful sanctuary',
    dining: 'Elevate your dining experience with elegant pieces',
    decor: 'Add the finishing touches that make a house a home'
};

const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low-high', label: 'Price: Low to High' },
    { value: 'price-high-low', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' },
    { value: 'name-az', label: 'Name: A-Z' }
];

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
    const [sortBy, setSortBy] = useState('featured');
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    
    const filteredProducts = all_product.filter(item => item.category === props.category);
    
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
        <div className='shop-category'>
            <div className="shopcategory-header">
                <h1>{categoryTitles[props.category] || props.category}</h1>
                <p>{categoryDescriptions[props.category]}</p>
            </div>
            
            <div className="shopcategory-content">
                <div className="shopcategory-indexSort">
                    <p>
                        Showing <span>{sortedProducts.length}</span> products
                    </p>
                    <div className="shopcategory-sort-wrapper">
                        <div 
                            className="shopcategory-sort" 
                            onClick={() => setShowSortDropdown(!showSortDropdown)}
                        >
                            <span>Sort by: {currentSortLabel}</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6"/>
                            </svg>
                        </div>
                        {showSortDropdown && (
                            <div className="shopcategory-sort-dropdown">
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
                
                <div className="shopcategory-products">
                    {sortedProducts.map((item, i) => (
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
                    <div className="shopcategory-empty">
                        <p>No products found in this category.</p>
                    </div>
                )}
                
                {sortedProducts.length > 8 && (
                    <div className="shopcategory-loadmore">
                        Explore More
                    </div>
                )}
            </div>
        </div>
    )
}

export default ShopCategory
