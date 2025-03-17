// import React from 'react';
// import styles from './MainPage.module.css';
// import Article from '../../components/MainPage/Article/Article';
//
// function MainPage() {
//     return (
//         <div className={styles.pageContainer}>
//             <MainHeader />
//             <Article/>
//             <Footer />
//         </div>
//     );
// }
//
// export default MainPage;

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Article from '../../components/MainPage/Article/Article';
import axios from 'axios';
import MainHeader from '../../components/MainPage/MainHeader/MainHeader';
import Footer from '../../components/Common/Footer/Footer';
import styles from './MainPage.module.css';

function MainPage() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('https://master-sai-restaurant.onrender.com/api/menu')
            .then(response => {
                // Assuming the response includes an imageUrl field for each article
                setArticles(response.data);
            })
            .catch(error => {
                console.error("Failed to fetch articles:", error);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    };

    return (
        <div className={styles.mainPage}>
            <MainHeader />
            <div className={styles.carouselContainer}>
                <Slider {...settings}>
                    {articles.map((article, index) => (
                        <div key={index}>
                            <Article
                                title={article.DishName}
                                description={article.DishDescription}
                                imageUrl={article.dishImgUrl} // Pass the image URL to the Article component
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <Footer />
        </div>
    );
}

export default MainPage;
