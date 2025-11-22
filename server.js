const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");  // Import CORS package

const app = express();
const port = 3000;

// Middleware to allow CORS
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",  // replace with your MySQL username
    password: "zoha1234a",  // replace with your MySQL password
    database: "exam_seating"
});

db.connect((err) => {
    if (err) {
        console.log("Error connecting to the database:", err);
    } else {
        console.log("Connected to the database.");
    }
});

// Routes

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Exam Seating Management System");
});

// Get all students
app.get("/api/students", (req, res) => {
    db.query("SELECT * FROM students", (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Get all departments
app.get("/api/departments", (req, res) => {
    db.query("SELECT * FROM departments", (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Get all rooms
app.get("/api/rooms", (req, res) => {
    db.query("SELECT * FROM rooms", (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Get all seating plans
app.get("/api/seating-plan", (req, res) => {
    db.query("SELECT * FROM seating_plans", (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Create a new student
app.post("/api/students", (req, res) => {
    const { rollNumber, name, email } = req.body;
    db.query("INSERT INTO students (rollNumber, name, email) VALUES (?, ?, ?)", [rollNumber, name, email], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Student added successfully", studentId: results.insertId });
    });
});

// Update a student
app.put("/api/students/:id", (req, res) => {
    const { id } = req.params;
    const { rollNumber, name, email } = req.body;
    db.query("UPDATE students SET rollNumber = ?, name = ?, email = ? WHERE id = ?", [rollNumber, name, email, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Student updated successfully" });
    });
});

// Delete a student
app.delete("/api/students/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM students WHERE id = ?", [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Student deleted successfully" });
    });
});

// Starting the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
