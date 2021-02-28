'use strict';

require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

// access static files inside public folder
app.use(express.static('./public'));

// Middleware -> convert POST from DataForm to req.body
app.use(express.urlencoded({extended:true}));

// localhost:8080/sendData?userName=razan&emailAddr=razan@razan.com
// app.get('/sendData',(req,res)=>{
//     // res.status(200).send('all good');
//     console.log(req.query.userName); // razan
//     res.redirect('/welcome.html');
// })

// localhost:8080/sendData
app.post('/sendData',(req,res)=>{
    // res.status(200).send('all good from post');
    console.log(req.body);
    console.log(req.body.userName); // razan
    res.redirect('/welcome.html');
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});