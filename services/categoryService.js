import { pool } from "../database.js";

export async function getAllCategories(){
    const query = "SELECT * FROM category";
    const [result] = await pool.query(query);

    return result;
}
