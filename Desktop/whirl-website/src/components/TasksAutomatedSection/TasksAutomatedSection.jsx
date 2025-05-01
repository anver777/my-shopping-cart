// src/components/TasksAutomatedSection/TasksAutomatedSection.jsx
import React from 'react';

function TasksAutomatedSection() {
  return (
    <section style={styles.tasksAutomated}>
      <div style={styles.tasksContent}>
        <h2 style={styles.tasksTitle}>Your tasks, automated.</h2>
        <p style={styles.tasksDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div style={styles.features}>
          <div style={styles.featureCard}>
            <span style={styles.featureIcon}>🔗</span>
            <h3 style={styles.featureTitle}>Learn your options.</h3>
            <p style={styles.featureDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
          <div style={styles.featureCard}>
            <span style={styles.featureIcon}>⚡</span>
            <h3 style={styles.featureTitle}>Stay informed.</h3>
            <p style={styles.featureDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div style={styles.featureCard}>
            <span style={styles.featureIcon}>👍</span>
            <h3 style={styles.featureTitle}>Automate it all.</h3>
            <p style={styles.featureDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
          <div style={styles.featureCard}>
            <span style={styles.featureIcon}>📢</span>
            <h3 style={styles.featureTitle}>Stay informed.</h3>
            <p style={styles.featureDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et consectetur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  tasksAutomated: {
    padding: '80px 40px',
    textAlign: 'center',
  },
  tasksContent: {
    maxWidth: '800px',
    margin: '0 auto',
    marginBottom: '40px',
  },
  tasksTitle: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
    lineHeight: '1.2',
  },
  tasksDescription: {
    fontSize: '1.1em',
    color: '#555',
    lineHeight: '1.8',
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '30px',
    flexWrap: 'wrap',
  },
  featureCard: {
    width: '250px',
    textAlign: 'left',
  },
  featureIcon: {
    fontSize: '2em',
    color: '#007bff',
    marginBottom: '15px',
  },
  featureTitle: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  featureDescription: {
    color: '#555',
    lineHeight: '1.6',
  },
};

export default TasksAutomatedSection;