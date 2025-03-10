import React from 'react';
import styles from './MainPage.module.css';
import MainHeader from '../../components/MainPage/MainHeader/MainHeader';
import Footer from '../../components/Common/Footer/Footer';
import Article from '../../components/MainPage/Article/Article';

function MainPage() {
    return (
        <div className={styles.pageContainer}>
            <MainHeader />
            <Article/>
            <Footer />
        </div>
    );
}

export default MainPage;
