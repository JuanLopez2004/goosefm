import Link from "next/link";
import styles from '../styles/header.module.css';

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerLeft}>
                         <Link href="/">
                            <img
                                src="https://github.com/user-attachments/assets/75ba5dcd-94c9-4eba-b13d-ce46536f9bee"
                                alt="Logo"
                                className={styles.headerLogo}
                            />
                        </Link>
                        <span className={styles.headerTitle}>goosefm</span>
                    </div>
                    <nav className={styles.headerNav}>
                        <Link href="/">Home</Link>
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