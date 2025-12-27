import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Image
                src="https://github.com/user-attachments/assets/373d27c1-2b06-4a67-b3e8-dec525800c67"
                alt="Hero Background"
                fill
                className={styles.heroImage}
                priority
            />
            <div className={styles.heroContent}>
                <Link href="/radio" className={styles.heroLink}>
                    <h1 className={styles.heroTitle}>Tune in Now</h1>
                    <p className={styles.heroSubtitle}>Listen to Goose FM</p>
                </Link>
            </div>
            <div className={styles.heroContent}>
                <Link href="/schedule" className={styles.heroLink}>
                    <h1 className={styles.heroTitle}>View Schedule</h1>
                    <p className={styles.heroSubtitle}>Check out upcoming broadcasts</p>
                </Link>
            </div>
            
        </section>
    );
}
