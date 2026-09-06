// Mock database array
let users = [
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" }
];

// Fetch all users
const getAllUsers = (req, res) => {
    res.json(users);
};

// Add a new user
const createUser = (req, res) => {
    const newUser = {
        id: (users.length + 1).toString(),
        name: req.body.name || `User ${users.length + 1}`
    };
    users.push(newUser);
    res.status(201).json({ message: "User added successfully", user: newUser });
};

// Fetch a single user by ID
const getUserById = (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id === id);
    
    if (!user) {
        return res.status(404).json({ error: `User with ID ${id} not found` });
    }
    res.json(user);
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById
};
