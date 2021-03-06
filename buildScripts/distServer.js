/* var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express(); */

import express from "express";
import path from "path";
import open from "open";
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

/* app.get('/users', function (req, res) {
    // Hard coding for simplicity. Pretend this hits a real database
    res.json([
        {"id": 1, "firstName" : "Bob", "lastName": "Smith", "email": "bob@email.com"},
        {"id": 2, "firstName" : "Tammy", "lastName": "Norton", "email": "tammy@email.com"},
        {"id": 3, "firstName" : "Tina", "lastName": "Lee", "email": "tina@email.com"}
    ])
}); */

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' +port);
    }
});