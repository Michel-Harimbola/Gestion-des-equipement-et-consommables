const express = require('express');
const authRouter = require('./routes/auth.route');

const app = express();

app.use(express.json());

app.use('/api/auth', authRouter);

// Route de base(pour le test)
app.get('/', (req, res) => {
    res.send("API is running.");
});

module.exports = app;