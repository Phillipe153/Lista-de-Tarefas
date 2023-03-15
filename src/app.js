
const express = require('express');
// const router = require('./routes/indexRouter');

const app = express(); 
app.use(express.json());
// app.use(router)

app.use((err, _req, res, _next) => {
    if (err.status) return res.status(err.status).json({ message: err.message });
    return res.status(500).json({ message: err.message });
});

module.exports = { app }


