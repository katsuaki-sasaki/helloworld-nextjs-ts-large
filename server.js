const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
// CORSの設定
app.use(cors({
    origin: 'http://localhost:3000',  // Next.jsが動作しているポートを許可
}));
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello World from Express!' });
});

app.listen(port, () => {
    console.log(`Express API listening at http://localhost:${port}`);
});
