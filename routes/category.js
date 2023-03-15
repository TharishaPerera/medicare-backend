import express from 'express';
import { getAllCategory } from '../controllers/categoryController.js';

const router = express.Router();

// get all categories
router.get('/', getAllCategory);

export default router;