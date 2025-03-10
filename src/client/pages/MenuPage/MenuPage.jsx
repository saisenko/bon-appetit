import React, { useEffect, useState } from 'react';
import styles from './MenuPage.module.css';
import Header from '../../components/Common/Header/Header';
import MenuEntry from '../../components/MenuPage/MenuEntry/MenuEntry';

import beefRossiniUrl from "../../assets/images/food/beef-rossini.jpg";
import chickenAlfredoUrl from "../../assets/images/food/chicken-alfredo.jpg";
import veggieDelightUrl from "../../assets/images/food/veggie-delight.jpg";

import axios from 'axios';

const imageMap = {
    "Beef Rossini": beefRossiniUrl,
    "Chicken Alfredo": chickenAlfredoUrl,
    "Veggie Delight": veggieDelightUrl,
};

function MenuPage() {
    const [menu, setMenu] = useState([]);
    const [sortedMenu, setSortedMenu] = useState([]);
    const [isAscending, setIsAscending] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/api/menu')
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
            isAscending ? a.Price - b.Price : b.Price - a.Price
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
                            img={imageMap[item.DishName.toLowerCase().replace(/ /g, '-')]}
                            name={item.DishName}
                            price={`$${item.Price.toFixed(2)}`}
                            ingredients={item.Ingredients}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MenuPage;
