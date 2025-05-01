// src/components/WhatIsWhirlSection/WhatIsWhirlSection.jsx
import React from 'react';

function WhatIsWhirlSection() {
  return (
    <section style={styles.whatIsWhirl}>
      <h2 style={styles.title}>What's Whirl <br /> all about?</h2>
      <div style={styles.features}>
        <div style={styles.featureCard}>
          <span style={styles.featureIcon}>🔍</span>
          <h3 style={styles.featureTitle}>All on one place.</h3>
          <p style={styles.featureDescription}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div style={styles.featureCard}>
          <span style={styles.featureIcon}>🔔</span>
          <h3 style={styles.featureTitle}>Get daily alerts.</h3>
          <p style={styles.featureDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div style={styles.featureCard}>
          <span style={styles.featureIcon}>🛡️📊</span>
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
  whatIsWhirl: {
    padding: '80px 40px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: '#333',
    lineHeight: '1.2',
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    marginTop: '30px',
  },
  featureCard: {
    width: '300px',
    textAlign: 'left',
  },
  featureIcon: {
    fontSize: '2em',
    color: '#007bff',
    marginBottom: '15px',
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

export default WhatIsWhirlSection;