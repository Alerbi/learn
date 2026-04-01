const express = require('express');

const app = express();

const PORT = 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Express!')
});

app.post('/', (req, res) => {
    const body = req.body;
    console.log(body);
    res.send('Got POST request');
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Getting user ID: ${userId}`);
    //.../users/6484
});

app.get('/users', (req, res) => {
    const userId = req.query.id;
    const search = req.query.search;
    res.send(`Getting user ID from query params: ${userId}. Searching for: ${search}`);
    //.../users?id=6484&search=name
});

app.listen(PORT, () => {
    console.log(`Express is listening on ${PORT}`);
});