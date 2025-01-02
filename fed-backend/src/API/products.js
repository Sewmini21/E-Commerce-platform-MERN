import express from 'express';
import { getProducts, createProducts, getProduct, deleteProduct, updateProduct } from '../Application/products.js';

export const productRouter = express.Router()

productRouter.route('/').get(getProducts).post(createProducts)

productRouter.route('/:id').get(getProduct).delete(deleteProduct).patch(updateProduct)

