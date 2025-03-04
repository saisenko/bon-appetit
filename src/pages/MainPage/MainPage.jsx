import React from 'react';
import styles from './MainPage.module.css';
import MainHeader from '../../components/MainPage/MainHeader/MainHeader';
import Footer from '../../components/Common/Footer/Footer';

function MainPage() {
    return (
        <div className={styles.pageContainer}>
            <MainHeader />
            <h1>Hello React</h1>
            <Footer />
        </div>
    );
}

export default MainPage;
