const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');

const router = express.Router();

// Store users in memory as an object for simplicity
const users = {};

// Validation schema for user
const userSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
});

// Utility to validate a user
function validateUser(user) {
    const result = userSchema.validate(user);
    console.log(result);
    if (result.error) {
        return result.error.details[0].message;
    }
    return null;
}

// CREATE user
router.post('/', (req, res) => {
    const error = validateUser(req.body);
    if (error) {
        return res.status(400).send({ error: "Invalid user data", details: error.replace(/^\s+/, '') });
    }
    const id = uuid.v4(); // Generate unique id
    users[id] = { id, ...req.body };
    res.status(201).send(users[id]);
});

// READ user by id
router.get('/:id', (req, res) => {
    const user = users[req.params.id];
    if (!user) {
        return res.status(404).send({ error: 'User not found' });
    }
    res.json(user);
});

// READ all users
router.get('/', (req, res) => {
    res.json(Object.values(users));
});

// UPDATE user by id
router.put('/:id', (req, res) => {
    const error = validateUser(req.body);
    if (error) {
        return res.status(400).send({ error: "Invalid user data" });
    }
    const user = users[req.params.id];
    if (!user) {
        return res.status(404).send({ error: 'User not found' });
    }
    users[req.params.id] = { ...user, ...req.body };
    res.json(users[req.params.id]);
});

// DELETE user by id
router.delete('/:id', (req, res) => {
    const user = users[req.params.id];
    if (!user) {
        return res.status(404).send({ error: 'User not found' });
    }
    delete users[req.params.id];
    res.status(204).end();
});

module.exports = router;