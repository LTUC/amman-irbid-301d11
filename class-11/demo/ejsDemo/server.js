'use strict';

const express = require('express');
require('dotenv').config();
const superagent = require('superagent');


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));

// to tell the express, we want to use ejs template engine
app.set('view engine','ejs');

// localhost:3000/
app.get('/',(req,res)=>{
    // res.send('hello');
    res.render('index');
})


// localhost:3000/listFamily
app.get('/listFamily',(req,res)=>{

    let people = ['atallah','mesina','razan','ali','sherry'];
    res.render('list',{familyMembers:people});
})

app.get('/books',(req,res)=>{
    // get books from google api server
    let url = `https://www.googleapis.com/books/v1/volumes?q=cats`;
    superagent.get(url)
    .then (booksResult =>{
        console.log(booksResult.body);
        // res.send(booksResult.body);
        res.render('booksList',{catLists:booksResult.body.items})
    })
})

app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})