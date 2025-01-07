import express from 'express';
import { productRouter } from './API/products.js';
import { globalErrorHandlingMiddleware } from './API/Middleware/global-error-handling-middleware.js';
import { connectDb } from './Infrastructure/db.js';

const app = express(); //calling the express constructor

const port = 8000;

app.use(express.json()); // for pass JSON requests

app.use('/products',productRouter);

app.use(globalErrorHandlingMiddleware);

connectDb();

app.listen(port, () => console.log(`Server running on port ${port}`));