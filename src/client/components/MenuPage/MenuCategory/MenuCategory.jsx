import React from "react";
import styles from "./MenuCategory.module.css";
import { Link } from "react-router-dom";

function MenuCategory({categoryTitleName, redirectTo}) {
    return (
        <div className={styles.menuCategoryContainer}>
            <h2>{categoryTitleName}</h2>
            <Link
                className={styles.redirectLink}
                to={redirectTo}>View Dishes</Link>
        </div>
    );
}

export default MenuCategory;