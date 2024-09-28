import '../styles/globals.css';
import Header from '../components/Header';  // Headerコンポーネントをインポート
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header /> {/* ヘッダーを全ページに表示 */}
            <main>
                <Component {...pageProps} />
            </main>
        </>
    );
}