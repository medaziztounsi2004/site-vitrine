import React from 'react';
import './Breadcrum.css';
import { Link } from 'react-router-dom';

const categoryNames = {
  living: 'Living Room',
  bedroom: 'Bedroom',
  dining: 'Dining',
  decor: 'Decor'
};

const Breadcrum = (props) => {
  const { product } = props;
  
  if (!product) return null;
  
  return (
    <div className='breadcrum'>
      <Link to='/' className='breadcrum-item'>Home</Link>
      <span className='breadcrum-separator'>/</span>
      <Link to={`/${product.category}`} className='breadcrum-item'>
        {categoryNames[product.category] || product.category}
      </Link>
      <span className='breadcrum-separator'>/</span>
      <span className='breadcrum-item breadcrum-current'>{product.name}</span>
    </div>
  );
};

export default Breadcrum;
