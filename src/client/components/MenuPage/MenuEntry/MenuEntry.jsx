import React, { useState } from 'react';
import styles from './MenuEntry.module.css';

function MenuEntry({ img, name, price, ingredients }) {
    const [showIngredients, setShowIngredients] = useState(false);

    const displayIngredients = () => {
        setShowIngredients(!showIngredients);
    };

    return (
        <div className={styles.menuEntryContainer}>
            <div className={styles.menuEntry}>
                <div className={styles.menuEntryMainData}>
                    <img className={styles.dishImg} src={img} alt={name} />
                    <div className={styles.dishInfo}>
                        <p className={styles.dishName}>{name}</p>
                        <p className={styles.dishPrice}>{price}</p>
                    </div>
                </div>
                <div className={styles.menuEntryIngredients}>
                    {showIngredients && (
                        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <button className={styles.toggleButton} onClick={displayIngredients}>
                {showIngredients ? "Hide Ingredients" : "Show Ingredients"}
            </button>
        </div>
    );
}

export default MenuEntry;
