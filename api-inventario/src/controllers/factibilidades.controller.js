import { pool } from '../db.js';

export class Factibilidades{

    getFactibilidades = async (req, res) =>{
        const [rows] = await pool.query(`
        SELECT 
            t0.opcion,
            t1.codigo_cad,
            t1.departamento,
            t1.municipio,
            t1.zona
        FROM factibilidades t0
        INNER JOIN cad t1 ON t1.id = t0.id_cad;
        `)
        res.json(rows)
    }
}

