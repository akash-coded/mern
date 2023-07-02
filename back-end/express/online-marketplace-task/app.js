const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(bodyParser.json());

// Data storage (in-memory for simplicity)
const users = [];
const products = [];
const orders = [];

// MIDDLEWARES
// CLIENT SIDE -> MIDDLEWARE1 (logging) -> MIDDLEWARE2 (auth guard) -> SERVER SIDE (req)
// CLIENT SIDE <- MIDDLEWARE (logging) <- SERVER SIDE(res)

// Middleware to log request details
function logRequest(req, res, next) {
    console.log(`[${new Date().toISOString()}] - ${req.method} - ${req.url}`);
    next();
}

// Middleware to validate required fields in the request body for user
function validateUserRequiredFields(req, res, next) {
    const requiredFields = ['name', 'email', 'password'];
    const missingFields = requiredFields.filter(field => !(field in req.body));

    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }

    next();
}

// Middleware to validate required fields in the request body for product
function validateProductRequiredFields(req, res, next) {
    const requiredFields = ['title', 'description', 'price'];
    const missingFields = requiredFields.filter(field => !(field in req.body));


    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }

    next();
}

// Middleware to validate required fields in the request body for order
function validateOrderRequiredFields(req, res, next) {
    const requiredFields = ['userId', 'productId', 'quantity'];
    const missingFields = requiredFields.filter(field => !(field in req.body));

    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }

    next();
}

// Middleware to handle errors
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
}

// Mounting the error handling middleware
app.use(errorHandler);

// USER ENDPOINTS

// Create a new user
app.post('/api/users', logRequest, validateUserRequiredFields, (req, res) => {
    // const { name, email, password } = req.body;
    const user = {
        id: uuidv4(),
        ...req.body,
        // name,
        // email,
        // password
    };

    users.push(user);
    res.status(201).json(user);
});

// Retrieve all users
app.get('/api/users', logRequest, (req, res) => {
    res.json(users);
});

// Retrieve a specific user
app.get('/api/users/:id', logRequest, (req, res) => {
    const user = users.find(user => user.id == req.params.id);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
});

// Update a specific user
app.put('/api/users/:id', logRequest, validateUserRequiredFields, (req, res) => {
    const userIndex = users.findIndex(user => user.id == req.params.id);

    if (userIndex < 0) {
        return res.status(404).json({ error: 'User not found' });
    }

    const updatedUser = {
        ...users[userIndex],
        ...req.body
    };

    users[userIndex] = updatedUser;
    res.json(updatedUser);
});

// Delete a specific user
app.delete('/api/users/:id', logRequest, (req, res) => {
    const userIndex = users.findIndex(user => user.id == req.params.id);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    const deletedUser = users.splice(userIndex, 1)[0];
    res.status(200).json(deletedUser);
});

// Start the server
app.listen(3002, () => {
    console.log('Server listening on port 3002');

    // Create a default user
    users.push({
        id: uuidv4(),
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: '123456'
    });

    // Create a default product
    products.push({
        id: uuidv4(),
        title: 'Product 1',
        description: 'Product 1 description',
        price: 100,
    });

    // Create default orders
    orders.push({
        id: uuidv4(),
        userId: users[0].id,
        productId: products[0].id,
        quantity: 1,
    });
    orders.push({
        id: uuidv4(),
        userId: users[0].id,
        productId: products[0].id,
        quantity: 2,
    });
});
