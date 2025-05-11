import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';
import './CartItem.css'; // You'll create this
import PropTypes from 'prop-types';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <li className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <div className="item-details">
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: 1</p> {/* Basic for now */}
      </div>
      <button onClick={handleRemoveFromCart}>Remove</button>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartItem;