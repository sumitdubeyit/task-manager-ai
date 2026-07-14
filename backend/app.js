// Create an Express API for task management with GET and POST endpoints
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory storage for tasks
let tasks = [];

// GET endpoint to retrieve all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST endpoint to create a new task
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    const newTask = { id: tasks.length + 1, title, description };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
