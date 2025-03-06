import React, { useState } from 'react';
import styles from './MenuPage.module.css';
import Header from '../../components/Common/Header/Header';
import MenuEntry from '../../components/MenuPage/MenuEntry/MenuEntry';

import beefRossiniUrl from "../../images/food/beef-rossini.jpg";
import chickenAlfredoUrl from "../../images/food/chicken-alfredo.jpg";
import veggieDelightUrl from "../../images/food/veggie-delight.jpg";

const menu = [
    {
        img: beefRossiniUrl,
        name: "Beef Rossini",
        price: 5.00,
        ingredients: ["Beef tournedos", "Foie gras", "Black truffle", "Madeira sauce"]
    },
    {
        img: chickenAlfredoUrl,
        name: "Chicken Alfredo",
        price: 7.00,
        ingredients: ["Chicken", "Alfredo sauce", "Pasta", "Parmesan cheese"]
    },
    {
        img: veggieDelightUrl,
        name: "Veggie Delight",
        price: 3.50,
        ingredients: ["Mixed vegetables", "Tofu", "Soy sauce", "Rice"]
    },
];

function MenuPage() {
    const [sortedMenu, setSortedMenu] = useState([...menu]);
    const [isAscending, setIsAscending] = useState(true);

    const sortByPrice = () => {
        const sorted = [...menu].sort((a, b) =>
            isAscending ? a.price - b.price : b.price - a.price
        );
        setSortedMenu(sorted);
        setIsAscending(!isAscending);
    };

    return (
        <div className={styles.menuPage}>
            <Header pageTitle="Our Menu"/>
            <div className={styles.menuPageContainer}>
                <button className={styles.sortButton} onClick={sortByPrice}>
                    Sort by Price ({isAscending ? "Ascending" : "Descending"})
                </button>
                <div className={styles.menu}>
                    {sortedMenu.map((item, index) => (
                        <MenuEntry
                            key={index}
                            img={item.img}
                            name={item.name}
                            price={`$${item.price.toFixed(2)}`}
                            ingredients={item.ingredients}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MenuPage;
