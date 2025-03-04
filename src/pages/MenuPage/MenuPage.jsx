import React, { useState } from 'react';
import styles from './MenuPage.module.css';
import Header from '../../components/Common/Header/Header';
import MenuEntry from '../../components/MenuPage/MenuEntry/MenuEntry';

const menu = [
    {
        img: "/bon-appetit/public/food/beef-rossini.jpg",
        name: "Beef Rossini",
        price: 5.00,
        ingredients: ["Beef tournedos", "Foie gras", "Black truffle", "Madeira sauce"]
    },
    {
        img: "/bon-appetit/public/food/chicken-alfredo.jpg",
        name: "Chicken Alfredo",
        price: 7.00,
        ingredients: ["Chicken", "Alfredo sauce", "Pasta", "Parmesan cheese"]
    },
    {
        img: "/bon-appetit/public/food/veggie-delight.jpg",
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
            <div className={styles.menu}>
                <button className={styles.sortButton} onClick={sortByPrice}>
                    Sort by Price ({isAscending ? "Ascending" : "Descending"})
                </button>
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
    );
}

export default MenuPage;
