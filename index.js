import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import patientRoutes from './routes/patients.js';
import doctorRoutes from './routes/doctors.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);

app.get('/', (req, res) => {
    res.send('API Backend for MediCare Android Application using NodeJS!');
});

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));