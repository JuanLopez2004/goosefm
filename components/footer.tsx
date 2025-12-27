import React from "react";
import styles from '../styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <p>&copy; 2026 goosefm.</p>
            </div>
        </footer>
    );
}
