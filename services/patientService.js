import { pool } from "../database.js";

export async function getOnePatientById(id){
    const query = `SELECT * FROM users WHERE id=${id}`;
    const [result] = await pool.query(query);

    return result;
}

export async function createNewPatient(data){
    // check whether the email exists
    const queryEmail = `SELECT id FROM users WHERE email='${data.email}'`;
    const [result] = await pool.query(queryEmail);

    // if not create a new user
    if(result.length == 0){
        const query = `INSERT INTO users (first_name, last_name, email, password, telephone, address, role, date_of_birth) VALUES ('${data.first_name}', '${data.last_name}', '${data.email}', '${data.password}', ${data.telephone}, '${data.address}', '${data.role}', '${data.date_of_birth}')`;
        const result = await pool.query(query);
        return 'success';
    } else {
        return 'email exists';
    }
}