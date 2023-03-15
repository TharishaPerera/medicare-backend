import express from 'express';
import { getAllDoctor } from '../controllers/doctorsController.js';

const router = express.Router();

// get all doctor details
router.get('/', getAllDoctor)

export default router;