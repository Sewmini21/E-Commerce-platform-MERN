import express from 'express';
import { productRouter } from './API/products.js';
import { globalErrorHandlingMiddleware } from './API/Middleware/global-error-handling-middleware.js';

const app = express(); //calling the express constructor

const port = 8000;

app.use(express.json()); // for pass JSON requests

app.use('/products',productRouter)

app.use(globalErrorHandlingMiddleware)

app.listen(port, () => console.log(`Server running on port ${port}`));