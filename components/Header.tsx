import Link from 'next/link';
import styles from '../styles/Header.module.css';  // スタイルファイルをインポート

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                {/* サイトタイトル（ホームリンク） */}
                <Link href="/">
                    My Website
                </Link>
            </div>

            {/* ナビゲーションリンク */}
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}