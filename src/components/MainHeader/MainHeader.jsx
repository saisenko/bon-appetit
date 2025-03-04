import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainHeader.module.css';

function MainHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="./chef.png" alt="Logo" />
            </div>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search..." />
            </div>
            <nav className={styles.navButtons}>
                <Link to="/menu">Menu</Link>
                <Link to="/chefs">Chefs</Link>
                <Link to="/about">About Us</Link>
            </nav>
        </header>
    );
}

export default MainHeader;
