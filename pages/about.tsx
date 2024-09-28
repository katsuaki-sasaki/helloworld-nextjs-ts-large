// pages/about.tsx
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Page</h1>
            <p className={styles.description}>
                Welcome to the about page of our Next.js app!
            </p>
            <p className={styles.description}>
                This application is a simple demonstration of Next.js features.
            </p>
        </div>
    );
}