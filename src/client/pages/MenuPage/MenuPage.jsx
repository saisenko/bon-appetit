import React, { useEffect, useState } from 'react';
import styles from './MenuPage.module.css';

import Header from '../../components/Common/Header/Header';
import MenuCategory from '../../components/MenuPage/MenuCategory/MenuCategory';

function MenuPage() {
    /* categories to put
    - appetizers & starters
    - soups & stews
    - main courses
    - desserts
    - other
    */
    return (
        <div className={styles.menuPage}>
            <Header pageTitle="Our Menu" />
            <div className={styles.menuPageContainer}>
                <div className={styles.menuCategories}>
                    <MenuCategory categoryTitleName={"🥗 Appetizers & Starters 🥗"} redirectTo={"/bon-appetit/menu/appetizers-n-starters"}/>
                    <MenuCategory categoryTitleName={"🍲 Soups & Stews 🍲"} redirectTo={"/bon-appetit/menu/soups-n-stews"}/>
                    <MenuCategory categoryTitleName={"🍽️ Main Courses 🍽️"} redirectTo={"/bon-appetit/menu/main-courses"}/>
                    <MenuCategory categoryTitleName={"🧁 Desserts 🧁"} redirectTo={"/bon-appetit/menu/desserts"}/>
                    <MenuCategory categoryTitleName={"🫓 Other 🫓"} redirectTo={"/bon-appetit/menu/other"}/>
                </div>
            </div>
        </div>
    );
}

export default MenuPage;
