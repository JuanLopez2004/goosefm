"use client";

import Link from 'next/link';
import styles from '@/styles/header.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link href="/" className={styles.headerLeft} onClick={closeMenu}>
                    <Image
                        src="https://github.com/user-attachments/assets/2af4e33c-53b6-4123-8333-785fe5d761a4"
                        alt="DeKalb Music Scene Logo"
                        width={120}
                        height={120}
                        className={styles.headerLogo}
                    />
                    <h1 className={styles.headerTitle}>DeKalbMusic</h1>
                </Link>

                <button
                    type="button"
                    className={styles.menuButton}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((value) => !value)}
                >
                    <span className={styles.menuLine} />
                    <span className={styles.menuLine} />
                    <span className={styles.menuLine} />
                </button>

                <nav className={`${styles.headerNav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href="/about" onClick={closeMenu}>About</Link>
                    <Link href="/upcoming-shows" onClick={closeMenu}>Upcoming Shows</Link>
                    <Link href="/photos" onClick={closeMenu}>Photos</Link>
                </nav>
            </div>
        </header>
    );
}
