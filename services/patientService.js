import { pool } from "../database.js";

export async function getUsers(){
    const [result] = await pool.query("SELECT * FROM users");
    console.log(result);
}