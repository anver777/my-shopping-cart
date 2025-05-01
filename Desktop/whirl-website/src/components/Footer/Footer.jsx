// src/components/Footer/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.logoInfo}>
        <div style={styles.logo}>Whirl</div>
        <p style={styles.builtBy}>Built by Nikolai Bain.</p>
        <p style={styles.poweredBy}>Powered by Webflow.</p>
      </div>
      <div style={styles.info}>
        <h4 style={styles.footerTitle}>Info</h4>
        <ul style={styles.footerList}>
          <li><a href="#" style={styles.footerLink}>Features</a></li>
          <li><a href="#" style={styles.footerLink}>Pricing</a></li>
          <li><a href="#" style={styles.footerLink}>Blog</a></li>
          <li><a href="#" style={styles.footerLink}>Support</a></li>
          <li><a href="#" style={styles.footerLink}>Terms & Conditions</a></li>
          <li><a href="#" style={styles.footerLink}>Privacy Policy</a></li>
        </ul>
      </div>
      <div style={styles.admin}>
        <h4 style={styles.footerTitle}>Admin</h4>
        <ul style={styles.footerList}>
          <li><a href="#" style={styles.footerLink}>Style Guide</a></li>
          <li><a href="#" style={styles.footerLink}>Licenses</a></li>
          <li><a href="#" style={styles.footerLink}>Instructions</a></li>
          <li><a href="#" style={styles.footerLink}>Changelog</a></li>
          <li><a href="#" style={styles.footerLink}>Password</a></li>
          <li><a href="#" style={styles.footerLink}>404</a></li>
        </ul>
      </div>
      <div style={styles.newsletter}>
        <h4 style={styles.footerTitle}>Newsletter</h4>
        <p style={styles.newsletterText}>Sign up for the latest news, company insights, and Whirl updates.</p>
        <div style={styles.newsletterInput}>
          <input type="email" placeholder="Your email" style={styles.emailInput} />
          <button style={styles.subscribeButton}>&gt;</button>
        </div>
      </div>
      <div style={styles.copyright}>
        <p>© 2022 Whirl. All Rights Reserved. Illustrations by Streamline.</p>
        <div style={styles.socialIcons}>
          <a href="#" style={styles.socialLink}>TW</a>
          <a href="#" style={styles.socialLink}>IN</a>
          <a href="#" style={styles.socialLink}>FB</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '60px 40px',
    backgroundColor: '#f9f9f9',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 2fr',
    gap: '20px',
    borderTop: '1px solid #eee',
  },
  logoInfo: {
    textAlign: 'left',
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  builtBy: {
    fontSize: '0.9em',
    color: '#777',
    marginBottom: '5px',
  },
  poweredBy: {
    fontSize: '0.9em',
    color: '#777',
  },
  info: {},
  admin: {},
  newsletter: {},
  footerTitle: {
    fontSize: '1.1em',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
  },
  footerLink: {
    textDecoration: 'none',
    color: '#555',
    fontSize: '0.9em',
    marginBottom: '8px',
    display: 'block',
  },
  newsletterText: {
    fontSize: '0.9em',
    color: '#555',
    marginBottom: '10px',
  },
  newsletterInput: {
    display: 'flex',
  },
  emailInput: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px 0 0 5px',
    flexGrow: 1,
    fontSize: '0.9em',
  },
  subscribeButton: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
  copyright: {
    gridColumn: '1 / -1',
    marginTop: '30px',
    paddingTop: '20px',
    borderTop: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.8em',
    color: '#777',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
  },
  socialLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1.2em',
  },
};

export default Footer;