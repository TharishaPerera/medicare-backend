import { getAllPatients, getOnePatientById, createNewPatient } from "../services/patientService.js";

export const getAllPatient = (req, res) => {
    const result = getAllPatients();

    result.then((patients) => {
        res.send(patients);
    });
}

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
    const newPatient = createNewPatient(patient);

    newPatient.then((result) => {
        if(result == 'success'){
            res.send(`Patient with the name '${patient.first_name}' is created.`);
        }
        if(result == 'email exists'){
            res.send(`Email with the value of '${patient.email}' is already exists.`);
        }
    });
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