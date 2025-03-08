import React, { useEffect, useState } from 'react';
import styles from './MenuPage.module.css';
import Header from '../../components/Common/Header/Header';
import MenuEntry from '../../components/MenuPage/MenuEntry/MenuEntry';
import { db } from '../../firebase/firebase-config';
import { collection, getDocs } from 'firebase/firestore';

import beefRossiniUrl from "../../assets/images/food/beef-rossini.jpg";
import chickenAlfredoUrl from "../../assets/images/food/chicken-alfredo.jpg";
import veggieDelightUrl from "../../assets/images/food/veggie-delight.jpg";

const imageMappings = {
    "Beef Rossini": beefRossiniUrl,
    "Chicken Alfredo": chickenAlfredoUrl,
    "Veggie Delight": veggieDelightUrl,
};

function MenuPage() {
    const [menu, setMenu] = useState([]);
    const [sortedMenu, setSortedMenu] = useState([]);
    const [isAscending, setIsAscending] = useState(true);

    useEffect(() => {
        const fetchMenu = async () => {
            const menuCollection = collection(db, 'menu');
            const menuSnapshot = await getDocs(menuCollection);
            const menuData = menuSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            // Map names to image URLs
            const menuWithImages = menuData.map(item => ({
                ...item,
                img: imageMappings[item.DishName]
            }));

            setMenu(menuWithImages);
            setSortedMenu(menuWithImages);
        };

        fetchMenu();
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
                            img={item.img}
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
