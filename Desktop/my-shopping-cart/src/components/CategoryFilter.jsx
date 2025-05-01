// src/components/CategoryFilter.jsx
import React from 'react';

function CategoryFilter({ categories, onFilterChange, selectedCategory }) {
  return (
    <div style={styles.container}>
      <label style={styles.label}>Фильтр по категории:</label>
      <select
        value={selectedCategory}
        onChange={(e) => onFilterChange(e.target.value)}
        style={styles.select}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

const styles = {
  container: {
    marginBottom: '20px',
  },
  label: {
    marginRight: '10px',
    fontWeight: 'bold',
  },
  select: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
};

export default CategoryFilter;