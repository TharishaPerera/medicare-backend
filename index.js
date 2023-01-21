import express from 'express';
import bodyParser from 'body-parser';

import patientRoutes from './routes/patients.js';
import doctorRoutes from './routes/doctors.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);

app.get('/', (req, res) => {
    res.send('API Backend for MediCare Android Aplication using NodeJS!');
});

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));