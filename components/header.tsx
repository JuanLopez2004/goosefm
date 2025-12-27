import Link from "next/link";
import styles from '../styles/header.module.css';

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerLeft}>
                        <span className={styles.headerTitle}>goosefm</span>
                    </div>
                    <nav className={styles.headerNav}>
                        <Link href="/app">Home</Link>
                        <Link href="/#About">About</Link>
                        <Link href="/radio">Radio</Link>
                        <Link href="/schedule">Schedule</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                </div>
            </header>
        </>
    );
}