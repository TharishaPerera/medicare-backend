import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import TwilioSDK from 'twilio';

import patientRoutes from './routes/patients.js';
import doctorRoutes from './routes/doctors.js';
import categoryRoutes from './routes/category.js';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const client = TwilioSDK(accountSid, authToken);

app.use(bodyParser.json());

app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/categories',categoryRoutes);

app.get('/', (req, res) => {
    res.send('API Backend for MediCare Android Application using NodeJS!');
});

// send OTP
app.post('/otp', (req, res) => {
    const {to, body} = req.body;

    client.messages.create({
        body: body,
        to: to,
        from: twilioNumber, 
    })
    .then(() => {
        res.send("SMS sent successfully");
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send("Error Sending SMS");
    });
});

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));