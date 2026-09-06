const express = require('express');
const router = express.Router();

// Mock database array
let users = [
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" }
];

// GET /users - Fetch all users dynamically
router.get('/', (req, res) => {
    res.json(users);
});

// POST /users - Add a new user dynamically
router.post('/', (req, res) => {
    const newUser = {
        id: (users.length + 1).toString(),
        name: req.body.name || `User ${users.length + 1}`
    };
    users.push(newUser);
    res.status(201).json({ message: "User added successfully", user: newUser });
});

// GET /users/:id - Fetch a single user dynamically
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id === id);
    
    if (!user) {
        return res.status(404).json({ error: `User with ID ${id} not found` });
    }
    res.json(user);
});

module.exports = router;
