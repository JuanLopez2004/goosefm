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
                <Link href="/upcoming-shows" className={styles.heroLink}>
                    <h1 className={styles.heroTitle}>Find Upcoming Shows</h1>
                    <p className={styles.heroSubtitle}>See what is happening in DeKalb</p>
                </Link>
            </div>
            <div className={styles.heroContent}>
                <Link href="/photos" className={styles.heroLink}>
                    <h1 className={styles.heroTitle}>Browse Photos</h1>
                    <p className={styles.heroSubtitle}>View flyers and scene shots</p>
                </Link>
            </div>
            
        </section>
    );
}
