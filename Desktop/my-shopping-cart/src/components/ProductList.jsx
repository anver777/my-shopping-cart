// src/components/ProductList.jsx
import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, onAddToCart }) {
  return (
    <div style={styles.container}>
      <h2>Список товаров</h2>
      <ul style={styles.list}>
        {products.map((product) => (
          <li key={product.id} style={styles.listItem}>
            <ProductItem product={product} onAddToCart={onAddToCart} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    flex: 2,
    padding: '15px',
    border: '1px solid #eee',
    borderRadius: '5px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
    padding: '10px',
    borderBottom: '1px solid #eee',
  },
};

export default ProductList;