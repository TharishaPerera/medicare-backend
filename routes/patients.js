import express from "express";
import { createPatient, getAllPatient, getOnePatient, updatePatient, deletePatient } from '../controllers/patientsController.js'

const router = express.Router();

// base endpoint for patients
//router.get('/', (req, res) => {
//    res.send('Patients Endpoints!');
//});
router.get('/', getAllPatient);

// get one patient
router.get('/:id', getOnePatient);

// register a patient from the android app(self register) or admin dashboard
router.post('/', createPatient);

// update a patient from the android app or admin dashboard
router.patch('/:id', updatePatient);

// delete a patient (close account)
router.delete('/:id', deletePatient);

export default router;