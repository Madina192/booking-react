const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Madina2002",
    database: "crud_db"
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO justtocheck (firstname, lastname, email) VALUES ('Madina', 'Akpaeva', 'madinaakpaeeva000@gmail.com')";
    db.query(sqlInsert, (err, result) => {
        console.log("error", err);
        console.log("result", result);
    })
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})