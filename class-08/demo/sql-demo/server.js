'use strict';

//load the dependencies
const express = require('express');
// Load Environment Variables from the .env file
require('dotenv').config(); 
const cors = require('cors');
const pg =require('pg');



//Application setup
const app = express();
app.use(cors());
const PORT = process.env.PORT;
// const client = new pg.Client(process.env.DATABASE_URL);
const client = new pg.Client({ connectionString: process.env.DATABASE_URL,   ssl: { rejectUnauthorized: false } });

// consle
// client.connect();





// ROUTES

app.get('/people',(req,res)=>{
    let SQL = `SELECT * FROM people;`;
    client.query(SQL)
    .then(results =>{
        // console.log(results);
        res.send(results.rows);
    })
    .catch((error)=>{
        res.send('pppppppppppp',error.message)
    })
})

/// localhost:3000/addMember?first=lina&last=mashayekh
app.get('/addMember',(req,res)=>{
    console.log(req.query);
    let firstName = req.query.first;
    let lastName = req.query.last;
    let SQL = `INSERT INTO people VALUES ($1,$2) RETURNING *;`;
    let safeValues = [firstName,lastName];
    client.query(SQL,safeValues)
    .then((result)=>{
        res.send(result.rows);
        // res.send('data has been inserted!!');
    })
    .catch((error)=>{
        res.send('eeeeeeeeeeee',error.message)
    })

})

app.get('/test', (request, response) => {
    response.status(200).send('ok'); 
});


// Error Handler
app.get('*', notFoundHandler);

//let's have another function to handle any errors
app.use(errorHandler);

function notFoundHandler(request,response) { 
    response.status(404).send('huh????');
}

function errorHandler(error, request, response) {
    response.status(500).send(error);
}


client.connect()
.then(()=>{
    app.listen(PORT, () =>
    console.log(`listening on ${PORT}`)
    );
})
.catch((error)=>{
    res.send('cccccccccccc',error.message)
})


