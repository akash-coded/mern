const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(bodyParser.json());

// Data storage (in-memory for simplicity)
const users = [];
const products = [];
const orders = [];

// Middleware to log request details
// CLIENT SIDE -> MIDDLEWARE1 (logging) -> MIDDLEWARE2 (auth guard) -> SERVER SIDE (req)
// CLIENT SIDE <- MIDDLEWARE (logging) <- SERVER SIDE(res)
function logRequest(req, res, next) {
    console.log(`[${new Date().toISOString()}] - ${req.method} - ${req.url}`);
    next();
}

// Middleware to handle errors
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
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
