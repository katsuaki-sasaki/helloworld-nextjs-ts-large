import {HelloResponse} from "../types/api";

/**
 * 指定されたURLからデータをフェッチし、JSON形式で返す関数
 *
 * @param {string} url - フェッチするAPIのURL
 * @returns {Promise<any>} - フェッチしたデータのJSON形式
 * @throws {Error} - ステータスコードがOKでない場合、エラーをスロー
 */
export async function fetchData(url: string): Promise<HelloResponse> {
    // URLからデータをフェッチする
    const res = await fetch(url);

    // レスポンスが成功していない場合、エラーをスローする
    if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }

    // レスポンスをJSON形式に変換して返す
    return await res.json();
}