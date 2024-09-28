// pages/index.tsx
import { NextPage } from 'next';
import Button from "../components/Button";
import SEO from "../components/SEO";
import Image from "next/image";
import {useFetchData} from "../hooks/useFetchData";
import Link from "next/link";

// スタイルのインポート
import styles from '../styles/About.module.css';
import {formatDateWithOptions} from "../utils/formatDate";

const handleClick = () => {
    alert('Button clicked!');
};

const Home: NextPage = () => {
    const { data, error, loading } = useFetchData('http://localhost:5000/api/hello');  // カスタムフックを使用
    const today = new Date();

    return (
        <>
            <SEO title="Hello World - Home" description="A simple Hello World app with SEO optimization"/>
            <h1>Hello World with SEO and Image Optimization</h1>
            <Image src="/images/hello-world.png" alt="Hello World" width={256} height={256} />

            {/* APIから取得したメッセージを表示 */}
            <h2>APIから取得したメッセージを表示</h2>
            {
                loading
                    ? (<p>Loading...</p>)
                    : error
                        ? (<p style={{ color: 'red' }}>Error: {error}</p>)
                        : (<p>Message from API: {data?.message}</p>)
            }

            {/* Aboutページへのリンク */}
            <h2>Aboutページへのリンク</h2>
            <Link href="/about" className={styles.link}>Go to About Page</Link>

            {/* Blogページへのリンク */}
            <h2>Blogページへのリンク</h2>
            <Link href="/blog" className={styles.link}>Go to Blog Page</Link>

            {/* ボタンの例 */}
            <h2>ボタンの例</h2>
            <Button label="Click Me" onClick={handleClick}/>

            {/* 環境変数を使用する例 */}
            <h2>環境変数を使用する例</h2>
            <p>{process.env.NEXT_PUBLIC_API_URL}/data?api_key={process.env.NEXT_PUBLIC_API_KEY}</p>

            {/* 日付の表示形式をローカライズ（地域化）する */}
            <h2>日付の表示形式をローカライズ（地域化）する例</h2>
            {formatDateWithOptions(today)}
        </>
    );
};

export default Home;