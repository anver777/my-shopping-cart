// src/components/GetStartedSection/GetStartedSection.jsx
import React from 'react';

function GetStartedSection() {
  return (
    <section style={styles.getStarted}>
      <div style={styles.getStartedContent}>
        <h2 style={styles.getStartedTitle}>Get started with Whirl</h2>
        <p style={styles.getStartedDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt.
        </p>
        <button style={styles.getStartedButton}>Book a demo</button>
        <div style={styles.guarantees}>
          <p style={styles.guaranteeItem}>✔️ Free 30-day trial</p>
          <p style={styles.guaranteeItem}>✔️ No credit-card required</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  getStarted: {
    padding: '80px 40px',
    backgroundColor: '#e0f7fa', // Light Cyan-ish
    textAlign: 'center',
  },
  getStartedContent: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  getStartedTitle: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
    lineHeight: '1.2',
  },
  getStartedDescription: {
    fontSize: '1.1em',
    color: '#555',
    lineHeight: '1.8',
    marginBottom: '30px',
  },
  getStartedButton: {
    padding: '15px 30px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    marginBottom: '20px',
  },
  guarantees: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  },
  guaranteeItem: {
    fontSize: '1em',
    color: '#555',
  },
};

export default GetStartedSection;