import mysql from 'mysql2/promise.js';
import { varambient } from '../env.js';

const db = mysql.createPool({
    host: varambient.DB_HOST,
    user: varambient.DB_USER,
    password: varambient.DB_PASSWORD,
    database: varambient.DB_DATABASE,
    connectionLimit: 10
});

export const getbyall = async (req, res) => {

    try {

        const [results] = await db.query(
            "SELECT * FROM gioielli"
        );

        res.json(results);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Errore interno del server"
        });
    }
};



export const getbyid = async (req, res) => {

    try {

        const { id } = req.params;

        const [results] = await db.query(
            "SELECT * FROM gioielli WHERE id = ?",
            [id]
        );

        res.json(results);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Errore interno del server"
        });
    }
};

export const deletebyid = async (req, res) => {

    try {

        const { id } = req.params;

        const [results] = await db.query(
            "DELETE FROM gioielli WHERE id = ?",
            [id]
        );

        res.status(204).json(results);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Errore interno del server"
        });
    }
};

