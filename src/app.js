const express = require('express');
const authRouter = require('./routes/auth.route.js');
const userRouter = require('./routes/user.route.js');

const app = express();

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// Route de base(pour le test)
app.get('/', (req, res) => {
    res.send("API is running.");
});

module.exports = app;