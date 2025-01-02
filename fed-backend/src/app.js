import express from 'express';
import { productRouter } from './Routes/products.js';

const app = express(); //calling the express constructor

const port = 8000;

app.use(express.json()); // for pass JSON requests

app.use('/products',productRouter)

app.listen(port, () => console.log(`Server running on port ${port}`));