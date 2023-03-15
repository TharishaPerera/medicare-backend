import { getAllDoctorDetails } from "../services/doctorService.js"


export const getAllDoctor = (req, res) => {
    const result = getAllDoctorDetails();

    result.then((doctors) => {
        res.send(doctors);
    });
}