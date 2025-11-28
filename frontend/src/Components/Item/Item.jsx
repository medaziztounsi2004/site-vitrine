import React, { useContext, useState, useEffect } from 'react';
import './Item.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import Rating from '../Rating/Rating';
import API_URL from '../../config/api';

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);
  const discount = props.old_price ? Math.round((1 - props.new_price / props.old_price) * 100) : 0;
  const [ratingData, setRatingData] = useState({ average: 0, count: 0 });

  useEffect(() => {
    fetch(`${API_URL}/reviews/${props.id}/average`)
      .then(res => res.json())
      .then(data => setRatingData(data))
      .catch(() => setRatingData({ average: 0, count: 0 }));
  }, [props.id]);

  return (
      <div className='item hover-scale'>
        <div className="item-image-container img-zoom">
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
          <Rating 
            rating={Math.round(Number(ratingData.average))} 
            size="small" 
            showCount={true} 
            count={ratingData.count} 
          />
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
