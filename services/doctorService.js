import { pool } from "../database.js"; 

export async function getAllDoctorDetails(){
    const query = "SELECT * FROM doctor";
    const [result] = await pool.query(query);

    return result;
}