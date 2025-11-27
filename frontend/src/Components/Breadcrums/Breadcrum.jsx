import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className='breadcrum'>
      <span className='breadcrum-item'>HOME</span>
      <img src={arrow_icon} className='arrowicon' alt='' />
      <span className='breadcrum-item'>SHOP</span>
      <img src={arrow_icon} className='arrowicon' alt='' />
      <span className='breadcrum-item'>{product.category}</span>
      <img src={arrow_icon} className='arrowicon' alt='' />
      <span className='breadcrum-item'>{product.name}</span>
    </div>
  );
};

export default Breadcrum;
