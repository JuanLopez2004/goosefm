import React from "react";
import styles from '../styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <p>&copy; 2025 Juan Lopez. All rights reserved.</p>
            </div>
        </footer>
    );
}
