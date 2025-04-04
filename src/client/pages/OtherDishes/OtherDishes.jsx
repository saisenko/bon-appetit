import React, { useState, useEffect } from 'react';
import styles from './OtherDishes.module.css';

import Header from '../../components/Common/Header/Header';
import MenuEntry from '../../components/MenuPage/MenuEntry/MenuEntry';

import axios from 'axios';

function OtherDihes() {
    const [menu, setMenu] = useState([]);
    const [sortedMenu, setSortedMenu] = useState([]);
    const [isAscending, setIsAscending] = useState(true);

    const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
    // const apiEndpoint = "http://localhost:5000";

    useEffect(() => {
        axios.get(`${apiEndpoint}/api/menu/other`)
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
    <div>
      <Header pageTitle={"🫓 Other 🫓"}/>
      <div className={styles.pageContainer}>
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
export default OtherDihes;