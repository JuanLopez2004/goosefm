import React from "react";
import styles from '../styles/contentbody.module.css';

export default function ContentBody({ children }: { children: React.ReactNode }) {
    return (
        <main id="About" className={styles.contentBody}>
            {children}
        </main>
    );
}