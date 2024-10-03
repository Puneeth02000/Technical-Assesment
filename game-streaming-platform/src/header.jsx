
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';

const Header = () => (
  <header className={styles.header}>
    <nav> 
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  </header>
);

export default Header;
