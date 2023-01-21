/***
 * get one patient by id
 */
export const getOnePatient = (req, res) => {
    const id = req.params.id;
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