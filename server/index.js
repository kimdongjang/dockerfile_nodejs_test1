const express = require('express');

const app = express();

const port = 8080;

app.get('/', (req, res) => {
    res.send('there');
})

app.listen(port, () => {
    console.log('Listeing on port 8080');
})