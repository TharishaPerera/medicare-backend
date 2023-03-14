import { pool } from "../database.js";

export async function getAllPatients(){
    const query = "SELECT * FROM patient";
    const [result] = await pool.query(query);

    return result;
}

export async function getOnePatientById(id){
    const query = `SELECT * FROM users WHERE id=${id}`;
    const [result] = await pool.query(query);

    return result;
}

export async function createNewPatient(data){
    console.log(data)
    // check whether the phone exists
    const queryPhone = `SELECT id FROM patient WHERE telephone='${data.telephone}'`;
    const [result] = await pool.query(queryPhone);

    // if not create a new patient
    if(result.length == 0){
        const query = `INSERT INTO patient (first_name, last_name, telephone, date_of_birth, gender, blood_type) VALUES ('${data.first_name}', '${data.last_name}', '${data.telephone}', '${data.date_of_birth}', '${data.gender}', '${data.blood_type}')`;
        const result = await pool.query(query);
        return 'success';
    } else {
        return 'telephone exists';
    }
}