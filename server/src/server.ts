import express from 'express';

const app = express();
app.use(express.json())

const port = process.env.PORT || 3333

app.listen(port, () => console.log(`🚀 Server running on http://localhost:3333`))