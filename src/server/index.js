var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const port = 3000;

const app = express();

app.use(express.static('dist'));
app.use(express.json());

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

app.get('/test', function (req, res) {
    console.log(req.query, req);
    res.send(mockAPIResponse);
});

app.post('/ok', function (req, res) {
    console.log('here', req.body.name);
    res.send({name: req.body.name});
});