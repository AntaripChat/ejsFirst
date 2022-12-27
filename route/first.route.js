const express = require('express');
const route = express.Router();
let arr = [];
route.get('/',(req,res)=>{
    res.render('index');
    //console.log(data);
});
route.post('/about',(req,res)=>{
    let data = req.body;
    let name = req.body.username;
    let mail = req.body.email;
    let date = req.body.date;
    res.render('succes',{name:name,email:mail,date:date});
    arr.push(data);
    console.log(data);
});

route.get('/see',(req,res)=>{
    res.send(arr);
})

module.exports = route;