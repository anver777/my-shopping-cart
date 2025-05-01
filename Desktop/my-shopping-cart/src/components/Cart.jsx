// src/components/Cart.jsx
import React from 'react';

function Cart({ cartItems, onRemoveFromCart }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.container}>
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul style={styles.list}>
          {cartItems.map((item) => (
            <li key={item.id} style={styles.listItem}>
              {item.name} - {item.price} руб.
              <button onClick={() => onRemoveFromCart(item.id)} style={styles.removeButton}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
      <p style={styles.total}>Итого: {totalPrice} руб.</p>
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: '15px',
    border: '1px solid #eee',
    borderRadius: '5px',
    backgroundColor: '#f5f5f5',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
    padding: '8px',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#fff',
  },
  removeButton: {
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
  total: {
    marginTop: '15px',
    fontWeight: 'bold',
    fontSize: '1.1em',
  },
};

export default Cart;