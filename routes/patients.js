import express from "express";

const router = express.Router();

const patients = [
    {
        firstName: "john",
        lastName: "doe",
        age: 25
    },
    {
        firstName: "jane",
        lastName: "doe",
        age: 34
    }
];

// get all patients
router.get('/', (req, res) => {
    console.log(patients);
    res.send(patients);
    // res.send('Patients Endpoints!');
});

// get one patient
router.get('/patients/:id', (req, res) => {

});

// self register patient from the android app
router.post('/register', (req, res) => {

});

// create a patient from the admin dashboard
router.post('/create', (req, res) => {
    const patient = req.body;
    patients.push(patient);

    res.send(`Patient with the name '${patient.firstName}' is created.`);
});


export default router;