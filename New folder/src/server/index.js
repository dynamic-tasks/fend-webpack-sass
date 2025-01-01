const path = require('path');
const express = require('express');
const port = 3000;

const app = express();

app.use(express.static('dist'));
app.use(express.json());

app.get('/', function(req, res){
    res.sendFile('dist/index.html');
});

app.listen(port, function(){
    console.log(`server running on ${port}`);
});