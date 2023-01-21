import { getOnePatientById } from "../services/patientService.js";

/***
 * get one patient by id
 */
export const getOnePatient = (req, res) => {
    const id = parseInt(req.params.id);
    const result = getOnePatientById(id);
    
    result.then((patient) => {
        res.send(patient);
    });
}

/***
 * create a patient account from the app or admin dashboard
 */
export const createPatient =  (req, res) => {
    const patient = req.body;
    patients.push(patient);

    res.send(`Patient with the name '${patient.firstName}' is created.`);
}

/***
 * update a patient details from the app or admin dashboard
 */
export const updatePatient = (req, res) => {

}

/***
 * delete a patient account from the app or admin dashboard
 */
export const deletePatient = (req, res) => {

}