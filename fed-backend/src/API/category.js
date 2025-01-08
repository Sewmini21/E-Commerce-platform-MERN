import express from 'express';
import { createCategories, deleteCategory, getCategories, getCategory, updateCategory } from '../Application/category.js';

export const categoryRouter = express.Router()

productRouter.route('/').get(getCategories).post(createCategories)

productRouter.route('/:id').get(getCategory).delete(deleteCategory).patch(updateCategory)

