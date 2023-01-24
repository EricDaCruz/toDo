import express from 'express';
import { routes } from './routes';

const app = express();

app.use(express.json())
routes(app)

const port = process.env.PORT || 3333

app.listen(port, () => console.log(`🚀 Server running on http://localhost:3333`))