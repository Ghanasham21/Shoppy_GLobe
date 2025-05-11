import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css'; // You'll create this

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>Error loading product details: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p className="description">{product.description}</p>
      <p className="price">Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      {product.images && (
        <div className="images">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={`${product.title} image ${index + 1}`} />
          ))}
        </div>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ProductDetail;