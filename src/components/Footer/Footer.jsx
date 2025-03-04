import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <h2>Contact Us</h2>
                <ul>
                    <li><b>Address:</b> 123 Main Street, Kyiv, Ukraine</li>
                    <li><b>Phone:</b> +380 44 123 4567</li>
                    <li><b>Email:</b> info@restaurant.com</li>
                </ul>
            </div>
            <div>
                <h2>Hours of Operation</h2>
                <ul>
                    <li><b>Monday - Thursday:</b> 11:00 AM - 10:00 PM</li>
                    <li><b>Friday - Saturday:</b> 11:00 AM - 11:00 PM</li>
                    <li><b>Sunday:</b> 12:00 PM - 9:00 PM</li>
                </ul>
            </div>
            <div>
                <h2>Follow Us</h2>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">X (former Twitter)</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
