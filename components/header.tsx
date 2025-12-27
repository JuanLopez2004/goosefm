import Link from 'next/link';
import styles from '@/styles/header.module.css';
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link href="/" className={styles.headerLeft}>
                    <Image
                        src="https://github.com/user-attachments/assets/8e237fe6-f227-43f5-b173-c5bfb91c62ef"
                        alt="Goose FM Logo"
                        width={120}
                        height={120}
                        className={styles.headerLogo}
                    />
                    <h1 className={styles.headerTitle}>goosefm</h1>
                </Link>
                <nav className={styles.headerNav}>
                    <Link href="/#About">About</Link>
                    <Link href="/radio">Radio</Link>
                    <Link href="/schedule">Schedule</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
