// src/components/HeroSection/HeroSection.jsx
import React from 'react';

function HeroSection() {
  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>Your everyday tasks, automated.</h1>
        <p style={styles.subtitle}>
          Whirl lets you design and streamline your everyday tasks and workflows
          in just a few clicks.
        </p>
        <div style={styles.buttons}>
          <button style={styles.primaryButton}>Book a demo</button>
          <button style={styles.secondaryButton}>Learn more &gt;</button>
        </div>
      </div>
      <div style={styles.imageContainer}>
        {/* Здесь будет изображение */}
      </div>
    </section>
  );
}

const styles = {
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '80px 40px',
  },
  content: {
    maxWidth: '50%',
  },
  title: {
    fontSize: '3em',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.2em',
    lineHeight: '1.8',
    marginBottom: '30px',
    color: '#555',
  },
  buttons: {
    display: 'flex',
    gap: '20px',
  },
  primaryButton: {
    padding: '15px 30px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
  },
  secondaryButton: {
    padding: '15px 20px',
    backgroundColor: 'transparent',
    color: '#007bff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1em',
  },
  imageContainer: {
    maxWidth: '40%',
    // Здесь можно будет добавить стили для изображения
  },
};

export default HeroSection;