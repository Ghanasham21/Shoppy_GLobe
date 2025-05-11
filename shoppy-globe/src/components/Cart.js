import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { selectCartItems, selectCartTotal } from '../redux/selectors/cartSelectors';
import './Cart.css'; // You'll create this

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  if (cartItems.length === 0) {
    return <div className="cart empty">Your cart is empty. <Link to="/">Continue shopping</Link></div>;
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="cart-total">
        <strong>Total: ${cartTotal.toFixed(2)}</strong>
      </div>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
}

export default Cart;