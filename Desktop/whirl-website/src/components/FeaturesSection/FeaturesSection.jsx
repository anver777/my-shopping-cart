// src/components/FeaturesSection/FeaturesSection.jsx
import React, { useState } from 'react';

function FeaturesSection() {
  const [expandedIndex, setExpandedIndex] = useState(0); // По умолчанию открыт первый элемент

  const featuresData = [
    {
      title: 'Anti-loss technology',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Exchange easily',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    },
    {
      title: 'Fully encrypted',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.',
    },
    {
      title: 'Plenty of options',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.',
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section style={styles.featuresSection}>
      <div style={styles.featuresContent}>
        <h2 style={styles.featuresTitle}>We will take care of everything, <br /> so you can get back to relaxing.</h2>
        <ul style={styles.featuresList}>
          {featuresData.map((feature, index) => (
            <li key={index} style={styles.featureItem}>
              <div style={styles.featureHeader} onClick={() => toggleExpand(index)}>
                <span style={styles.featureIcon}>⚙️</span>
                <h3 style={styles.featureItemTitle}>{feature.title}</h3>
                <span style={styles.arrowIcon}>▼</span>
              </div>
              {expandedIndex === index && (
                <p style={styles.featureDescription}>{feature.description}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div style={styles.featuresImageContainer}>
        {/* Здесь будет изображение компьютера */}
      </div>
    </section>
  );
}

const styles = {
  featuresSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '80px 40px',
    backgroundColor: '#f9f9f9',
  },
  featuresContent: {
    maxWidth: '50%',
  },
  featuresTitle: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#333',
    lineHeight: '1.2',
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  featureItem: {
    marginBottom: '20px',
    borderBottom: '1px solid #eee',
    paddingBottom: '20px',
  },
  featureHeader: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  featureIcon: {
    fontSize: '1.5em',
    color: '#007bff',
    marginRight: '15px',
  },
  featureItemTitle: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#333',
    flexGrow: 1,
  },
  arrowIcon: {
    fontSize: '1.2em',
    color: '#777',
  },
  featureDescription: {
    paddingLeft: '40px',
    marginTop: '10px',
    color: '#555',
    lineHeight: '1.6',
  },
  featuresImageContainer: {
    maxWidth: '40%',
    // Здесь можно будет добавить стили для изображения компьютера
  },
};

export default FeaturesSection;