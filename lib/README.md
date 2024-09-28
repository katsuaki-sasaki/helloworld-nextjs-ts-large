# lib/

このディレクトリには、APIやデータベース接続に関するロジックを含めます。例えば、外部APIとの通信やデータベースのクエリを実行する関数などを定義します。

利用例:
- MongoDBやPostgreSQLなどのデータベース接続
- REST APIやGraphQLのクライアント処理

例：
外部APIとのやり取りやデータベース接続用の関数
```javascript
export async function fetchData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
  ```
