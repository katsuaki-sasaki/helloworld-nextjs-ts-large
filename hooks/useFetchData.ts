import { useState, useEffect } from 'react';
import { fetchData } from '../lib/fetchData';
import {HelloResponse} from "../types/api"; // fetchData を呼び出す

/**
 * APIデータをフェッチするカスタムフック
 * @param {string} url - データを取得するためのAPIのURL
 * @returns {{ data: HelloResponse | null, error: string | null, loading: boolean }} - データ、エラー、ローディング状態を返す
 */
export const useFetchData = (url: string): {
    data: HelloResponse | null, error: string | null, loading: boolean } => {

    const [data, setData] = useState<HelloResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchData(url);  // libのfetchDataを利用してデータを取得
                setData(result);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        getData();  // データをフェッチ
    }, [url]);

    return { data, error, loading };
};