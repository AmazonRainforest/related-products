/* eslint-disable no-nested-ternary */
import React from 'react';
import propTypes from 'prop-types';

import style from '../css/product-list-item.css';
import FeedbackLink from './FeedbackLink';
import Prime from './Prime';

const ProductListItem = ({ product, showLinks }) => {
  const { productId, name, imageUrl, avgRating, numReviews, price, prime } = product;
  return (
    <div className={style['single-product']}>
      <FeedbackLink showLinks={showLinks} />
      <img src={imageUrl} alt={name} />
      <div className="product-title">{name}</div>
      <div className="product-ratings">
        <span className={avgRating > 4.7 ? style['stars-5']
          : avgRating > 4.2 ? style['stars-4-5']
          : avgRating > 3.7 ? style['stars-4']
          : avgRating > 3.2 ? style['stars-3-5']
          : avgRating > 2.7 ? style['stars-3']
          : avgRating > 2.2 ? style['stars-2-5']
          : avgRating > 1.7 ? style['stars-2']
          : avgRating > 1.2 ? style['stars-1-5']
          : avgRating > 0.7 ? style['stars-1']
          : avgRating > 0.2 ? style['stars-0-5']
          : style['stars-0']}
        />
        <span className="total-reviews">{numReviews}</span>
      </div>
      <div className="product-pricing">
        <span className="price">{product.price}</span>
        <Prime isPrime={product.prime} />
      </div>
    </div>
  );
};

ProductListItem.propTypes = {
  product: propTypes.shape({}).isRequired,
};

export default ProductListItem;
