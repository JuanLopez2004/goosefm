import React from "react";
import styles from '../styles/contentbody.module.css';

type ContentBodyProps = {
    children: React.ReactNode;
    noHeaderOffset?: boolean;
};

export default function ContentBody({ children, noHeaderOffset = false }: ContentBodyProps) {
    return (
        <main id="main-content" className={`${styles.contentBody} ${noHeaderOffset ? styles.noHeaderOffset : ''}`}>
            {children}
        </main>
    );
}