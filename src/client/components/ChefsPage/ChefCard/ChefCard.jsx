import React from 'react';
import styles from './ChefCard.module.css';

function ChefCard({ name, img, description }) {
    return (
        <div className={styles.chefCard}>
            <img className={styles.chefImg} src={img} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ChefCard;
