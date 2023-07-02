const express = require('express');
const morgan = require('morgan');

const usersRouter = require('./routes/users');

const app = express();

app.use(express.json());
app.use(morgan('tiny')); // Logging

// Routes
app.use('/api/users', usersRouter);

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}...`));