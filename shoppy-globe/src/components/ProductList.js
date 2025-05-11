import React, { useState } from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';
import './ProductList.css'; // You'll create this

function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');
  const { products, loading, error } = useFetchProducts('https://dummyjson.com/products');

  const filteredProducts = products ? products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul className="products-grid">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;