import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        Whirl {}
      </div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#" style={styles.navLink}>Features</a></li>
          <li style={styles.navItem}><a href="#" style={styles.navLink}>Pricing</a></li>
          <li style={styles.navItem}><a href="#" style={styles.navLink}>Integrations</a></li>
          <li style={styles.navItem}><a href="#" style={styles.navLink}>Learn</a></li>
        </ul>
      </nav>
      <div style={styles.actions}>
        <button style={styles.signInButton}>Sign in</button>
        <button style={styles.bookDemoButton}>Book a demo</button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  nav: {
    marginLeft: '40px',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
  navItem: {
    marginRight: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
  },
  actions: {
    display: 'flex',
    gap: '15px',
  },
  signInButton: {
    padding: '10px 15px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#333',
    cursor: 'pointer',
    fontSize: '1em',
  },
  bookDemoButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
  },
};

export default Header; 