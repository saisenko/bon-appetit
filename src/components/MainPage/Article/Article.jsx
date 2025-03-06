import React from 'react';

import styles from './Article.module.css';

import imgUrl from "../../../images/food/beef-rossini.jpg";

function Article() {
    return (
        <div className={styles.articleContainer}>
            <h1 className={styles.title}>Beef Rossini</h1>
            <div className={styles.articleContent}>
                <img 
                    className={styles.articleImg}
                    src={imgUrl}
                    alt="Beef Rossini"
                />
                <p className={styles.articleText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam quisquam voluptatibus doloribus debitis numquam eos
                    hic quis adipisci iure ipsam unde totam exercitationem,
                    et aperiam rerum aspernatur nobis!
                    Necessitatibus, dolorem.
                </p>
            </div>
        </div>
    );
}

export default Article;