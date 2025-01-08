import express from 'express';
import { createCategories, deleteCategory, getCategories, getCategory, updateCategory } from '../Application/category.js';

export const categoryRouter = express.Router()

categoryRouter.route('/').get(getCategories).post(createCategories)

categoryRouter.route('/:id').get(getCategory).delete(deleteCategory).patch(updateCategory)

