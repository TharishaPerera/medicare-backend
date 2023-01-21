import { pool } from "../database.js";

export async function getOnePatientById(id){
    const query = `SELECT * FROM users WHERE id=${id}`;
    const [result] = await pool.query(query);

    return result;
}