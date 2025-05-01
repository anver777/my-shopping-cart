// src/components/BlueSection/BlueSection.jsx
import React from 'react';

function BlueSection() {
  return (
    <section style={styles.blueSection}>
      <div style={styles.blueContent}>
        <h2 style={styles.blueTitle}>Set, forget, and then <br /> track.</h2>
        <p style={styles.blueDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <ul style={styles.blueList}>
          <li style={styles.blueListItem}>✔️ Understand your options</li>
          <li style={styles.blueListItem}>✔️ No lock-ins</li>
          <li style={styles.blueListItem}>✔️ You own the shares</li>
        </ul>
        <button style={styles.blueButton}>Book a Demo</button>
      </div>
      <div style={styles.blueImageContainer}>
        {/* Здесь будет иллюстрация */}
      </div>
    </section>
  );
}

const styles = {
  blueSection: {
    backgroundColor: '#e0f2f7', // Light Teal
    padding: '80px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blueContent: {
    maxWidth: '50%',
    color: '#333',
  },
  blueTitle: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  blueDescription: {
    fontSize: '1.1em',
    lineHeight: '1.8',
    marginBottom: '30px',
  },
  blueList: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '30px',
  },
  blueListItem: {
    fontSize: '1.1em',
    marginBottom: '10px',
  },
  blueButton: {
    padding: '15px 30px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
  },
  blueImageContainer: {
    maxWidth: '40%',
    // Здесь можно будет добавить стили для изображения
  },
};

export default BlueSection;