// src/components/TrustSection/TrustSection.jsx
import React from 'react';

function TrustSection() {
  return (
    <section style={styles.trust}>
      <div style={styles.trustHeader}>
        <p style={styles.trustText}>Trusted by 50,000+ companies</p>
        <div style={styles.logos}>
          {/* Логотипы компаний будут здесь */}
          <span style={styles.logoPlaceholder}>focusfox</span>
          <span style={styles.logoPlaceholder}>NowInTech</span>
          <span style={styles.logoPlaceholder}>Optimer</span>
          <span style={styles.logoPlaceholder}>Carded</span>
        </div>
      </div>
      <div style={styles.features}>
        <div style={{ ...styles.featureCard, backgroundColor: '#fff8dc' }}> {/* Light Yellow */}
          <span style={styles.featureIcon}>⚡</span>
          <h3 style={styles.featureTitle}>Fast. Really fast.</h3>
          <p style={styles.featureDescription}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div style={{ ...styles.featureCard, backgroundColor: '#e0ffff' }}> {/* Light Cyan */}
          <span style={styles.featureIcon}>💰</span>
          <h3 style={styles.featureTitle}>More bang for buck.</h3>
          <p style={styles.featureDescription}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div style={{ ...styles.featureCard, backgroundColor: '#ffe4e1' }}> {/* Light Coral */}
          <span style={styles.featureIcon}>🛡️❤️</span>
          <h3 style={styles.featureTitle}>Safe and secure.</h3>
          <p style={styles.featureDescription}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  trust: {
    padding: '60px 40px',
    textAlign: 'center',
  },
  trustHeader: {
    marginBottom: '40px',
  },
  trustText: {
    fontSize: '1.1em',
    color: '#555',
    marginBottom: '20px',
  },
  logos: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '30px',
  },
  logoPlaceholder: {
    fontSize: '1.2em',
    color: '#777',
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  },
  featureCard: {
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    textAlign: 'left',
  },
  featureIcon: {
    fontSize: '2em',
    color: '#007bff',
    marginBottom: '10px',
  },
  featureTitle: {
    fontSize: '1.3em',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  featureDescription: {
    color: '#555',
    lineHeight: '1.6',
  },
};

export default TrustSection;