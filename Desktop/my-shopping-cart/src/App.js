// src/App.jsx
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CategoryFilter from './components/CategoryFilter';

const productsData = [
  { id: 1, name: 'Книга', price: 500, category: 'Книги' },
  { id: 2, name: 'Футболка', price: 1500, category: 'Одежда' },
  { id: 3, name: 'Наушники', price: 3000, category: 'Электроника' },
  { id: 4, name: 'Штаны', price: 2000, category: 'Одежда' },
  { id: 5, name: 'Телефон', price: 25000, category: 'Электроника' },
];

function App() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [filterCategory, setFilterCategory] = useState('Все');

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const handleFilterChange = (category) => {
    setFilterCategory(category);
  };

  const filteredProducts = filterCategory === 'Все'
    ? products
    : products.filter((product) => product.category === filterCategory);

  const uniqueCategories = ['Все', ...new Set(products.map((product) => product.category))];

  return (
    <div style={styles.container}>
      <h1>Корзина покупок</h1>
      <CategoryFilter
        categories={uniqueCategories}
        onFilterChange={handleFilterChange}
        selectedCategory={filterCategory}
      />
      <div style={styles.content}>
        <ProductList products={filteredProducts} onAddToCart={addToCart} />
        <Cart cartItems={cart} onRemoveFromCart={removeFromCart} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  content: {
    display: 'flex',
    gap: '20px',
  },
};

export default App;