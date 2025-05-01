// src/components/ProductItem.jsx
import React from 'react';

function ProductItem({ product, onAddToCart }) {
  return (
    <div style={styles.container}>
      <h3>{product.name}</h3>
      <p>Цена: {product.price} руб.</p>
      <p>Категория: {product.category}</p>
      <button onClick={() => onAddToCart(product)} style={styles.button}>
        Добавить в корзину
      </button>
    </div>
  );
}

const styles = {
  container: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#fff',
  },
  button: {
    padding: '8px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductItem;