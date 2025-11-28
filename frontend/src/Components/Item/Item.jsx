import React, { useContext } from 'react';
import './Item.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);
  const discount = props.old_price ? Math.round((1 - props.new_price / props.old_price) * 100) : 0;

  return (
      <div className='item'>
        <div className="item-image-container">
          <Link to={`/product/${props.id}`}>
            <img onClick={() => window.scrollTo(0,0)} src={props.image} alt={props.name} />
          </Link>
          {discount > 0 && <span className="item-badge">-{discount}%</span>}
          <button className="item-add-cart" onClick={() => addToCart(props.id)}>
            Add to Cart
          </button>
        </div>
        <div className="item-details">
          <p className="item-name">{props.name}</p>
          <div className="item-prices">
            <span className="item-price-new">${props.new_price}</span>
            {props.old_price && props.old_price > props.new_price && (
              <span className="item-price-old">${props.old_price}</span>
            )}
          </div>
        </div>
      </div>
  )
}

export default Item;
