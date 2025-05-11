import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItemsCount } from '../redux/selectors/cartSelectors';
import './Header.css'; // You'll create this

function Header() {
  const cartItemsCount = useSelector(selectCartItemsCount);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ShoppyGlobe</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart ({cartItemsCount})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;