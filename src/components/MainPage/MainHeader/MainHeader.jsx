import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainHeader.module.css';

function MainHeader() {
    const pathToLogo = "bon-appetit/public/chef.png"
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={pathToLogo} alt="Logo" />
            </div>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search..." />
            </div>
            <nav className={styles.navButtons}>
                <Link to="/bon-appetit/menu">Menu</Link>
                <Link to="/bon-appetit/chefs">Chefs</Link>
                <Link to="/bon-appetit/about">About Us</Link>
            </nav>
        </header>
    );
}

export default MainHeader;
