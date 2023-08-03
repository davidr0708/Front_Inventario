import { pool } from '../db.js';

export class Dispositivos{
    getHello = (req, res) => res.send('Hello world')

    getDispositivo = async (req, res) =>{
        const [rows] = await pool.query('SELECT * FROM dispositivo')
        res.json(rows)
    }
    
    postDispositivo = async (req, res) => {
        const {serial, referencia, id_tipo} = req.body
        const [rows] = await pool.query('INSERT INTO dispositivo (serial, referencia, id_tipo, id_estado) VALUES (?, ?, ?, 4)', [serial, referencia, id_tipo])

        console.log(req.body)
        res.send({
            id: rows.insertId,
            serial, 
            referencia, 
            id_tipo
        })
    }

    putDispositivo = (req, res) => res.send('put Dispositivo')
    deleteDispositivo = (req, res) => res.send('delete Dispositivo')
    
}