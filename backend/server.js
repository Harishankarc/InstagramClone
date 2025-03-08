const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const cors = require("cors");
const PORT = 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const db = new sqlite3.Database("./database.db", (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log("Connected to the SQLite database.");
});

const querys = [
    `CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY,
        name VARCHAR(30),
        email VARCHAR(30),
        password VARCHAR(30)
    )`
]

db.serialize(() => {
    querys.forEach((query) => {
        db.run(query);
    });    
});

app.post("/auth/signup",(req,res)=>{
    const {name,email,password} = req.body;
    if(name && email && password){
        const sql = "INSERT INTO users (name,email,password) VALUES (?,?,?)";
        db.run(sql,[name,email,password],(err)=>{
            if(err){
                res.status(500).json({message:err.message})
            }else{
                res.status(201).json({message:"User created successfully"})
            }
        })
    }else{
        console.log("All fields are required");
    }
});

app.post("/auth/login",(req,res)=>{
    const {email,password} = req.body;
    if(email && password){
        const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
        db.get(sql,[email,password],(err)=>{
            if(err){
                res.status(500).json({message:err.message})
            }else{
                res.status(200).json({message:"User logged in successfully"})
            }
        })
    }else{
        console.log("All fields are required");
    }
});





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})