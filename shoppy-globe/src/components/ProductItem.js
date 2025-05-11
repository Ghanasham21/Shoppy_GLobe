import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import './ProductItem.css'; // You'll create this
import PropTypes from 'prop-types';

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <li className="product-item">
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
      </Link>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;