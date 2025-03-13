import React, { useEffect, useState } from 'react';
import styles from './MenuPage.module.css';
import Header from '../../components/Common/Header/Header';
import MenuEntry from '../../components/MenuPage/MenuEntry/MenuEntry';

import axios from 'axios';

function MenuPage() {
    const [menu, setMenu] = useState([]);
    const [sortedMenu, setSortedMenu] = useState([]);
    const [isAscending, setIsAscending] = useState(true);

    useEffect(() => {
        axios.get('https://master-sai-restaurant.onrender.com/api/menu')
        .then(response => {
            setMenu(response.data);
            setSortedMenu(response.data);
        })
        .catch(error => {
            console.log("Error fetching menu data:", error);
        });
    }, []);

    const sortByPrice = () => {
        const sorted = [...menu].sort((a, b) =>
            isAscending ? a.DishPrice - b.DishPrice : b.DishPrice - a.DishPrice
        );
        setSortedMenu(sorted);
        setIsAscending(!isAscending);
    };

    return (
        <div className={styles.menuPage}>
            <Header pageTitle="Our Menu" />
            <div className={styles.menuPageContainer}>
                <button className={styles.sortButton} onClick={sortByPrice}>
                    Sort by Price ({isAscending ? "Ascending" : "Descending"})
                </button>
                <div className={styles.menu}>
                    {sortedMenu.map((item) => (
                        <MenuEntry
                            key={item.id}
                            img={item.dishImgUrl}
                            name={item.DishName}
                            price={`$${item.DishPrice}`}
                            ingredients={item.DishIngredients}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MenuPage;
