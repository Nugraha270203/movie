import express from "express";
import mysql, { createConnection } from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieparser from "cookie-parser";


const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET", "DELETE"],
    credentials: true

}));
app.use(cookieparser());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movie'
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log('Received login request:', { username, password });

    const sql = 'SELECT * FROM admin WHERE username = ?';
    db.query(sql, [username], (err, data) => {
        if (err) {
            console.error('Database error:', err);
            return res.json({ Error: "Login error in server!" });
        }

        if (data.length > 0) {
            const storedPassword = data[0].password;
            if (password === storedPassword) {
                console.log('Login successful for user:', username);
                const name = data[0].name;
                const token = jwt.sign({ name }, "jwt-secret-key", { expiresIn: '1d' });
                res.cookie('token', token);
                return res.json({ Status: "Success" });
            } else {
                console.warn('Incorrect password for user:', username);
                return res.json({ Error: "Incorrect password!" });
            }
        } else {
            console.warn('Username not found:', username);
            return res.json({ Error: "Username not found!" });
        }
    });
});


app.listen(2702, () => {
    console.log("Server aktif...");
})