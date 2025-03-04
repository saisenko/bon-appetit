import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header({ pageTitle }) {
    return (
        <div className={styles.header}>
            <Link className={styles.backBtn} to="/">Back</Link>
            <h1 className={styles.title}>‧͙⁺˚*･༓☾{pageTitle}☽༓･*˚⁺‧͙</h1>
        </div>
    );
}

export default Header;
