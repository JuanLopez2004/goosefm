import React from "react";
import styles from '../styles/hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Welcome to Goose FM</h1>
                <p className={styles.heroSubtitle}>hi</p>
            </div>
        </section>
    );
}
