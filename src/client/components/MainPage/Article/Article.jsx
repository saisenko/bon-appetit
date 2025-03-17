import React from 'react';
import styles from './Article.module.css';

function Article({ title, description, imageUrl }) {
    return (
        <div className={styles.article}>
            <img src={imageUrl} alt={title} className={styles.articleImage} />
            <div className={styles.articleContent}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Article;
