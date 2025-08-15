import express from 'express';
const app = express();
app.get('/', (_, res) => res.send('Hello from backend!'));
app.listen(3000, () => console.log('Backend running on port 3000'));

