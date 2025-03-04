import React from 'react';
import styles from './ChefsPage.module.css';
import Header from '../../components/Common/Header/Header';
import ChefCard from '../../components/ChefsPage/ChefCard/ChefCard';

const chefs = [
    {
        name: "Chef One",
        img: "/bon-appetit/public/chef.png",
        description: "Master of Italian cuisine, known for his pasta dishes."
    },
    {
        name: "Chef Two",
        img: "/bon-appetit/public/chef.png",
        description: "Expert in French pastries and desserts."
    },
    {
        name: "Chef Three",
        img: "/bon-appetit/public/chef.png",
        description: "Specializes in Asian fusion cuisine."
    },
];

function ChefsPage() {
    return (
        <div className={styles.chefsPageContaier}>
            <Header pageTitle="Our Chefs"/>
            <div className={styles.chefs}>
                {chefs.map((chef, index) => (
                    <ChefCard
                        key={index}
                        name={chef.name}
                        img={chef.img}
                        description={chef.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default ChefsPage;
