import express from 'express';

export const categoryRouter = express.Router();

categoryRouter
    .get('/categories', (req, res) => {res.send('Pegeui :)')})
