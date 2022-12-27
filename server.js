const express = require('express');
const first = require('./route/first.route');
const bodyparser = require('body-parser')
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use('/',first);


app.listen(5000,console.log('Running ----'));