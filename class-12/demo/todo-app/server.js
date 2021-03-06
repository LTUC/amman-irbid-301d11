'use strict'

// Application Dependencies
const express = require('express');
const pg = require('pg');

// Environment variables
require('dotenv').config();

// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware
// app.use( express.json() );
app.use(express.urlencoded({extended:true}));
// Specify a directory for static resources
app.use(express.static('./public'));

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);

// Set the view engine for server-side templating
app.set('view engine', 'ejs');


// API Routes
app.get('/', getTasks);
app.get('/task/:taskID',getOneTask);
app.get('/addTaskForm',showForm);
app.post('/addTask',addTaskHandler);


// HELPER FUNCTIONS
function getTasks(request, response) {
  let SQL = `SELECT * FROM tasks;`
  client.query(SQL)
  .then (result=>{
    // console.log(result.rows);
    response.render('index',{tasksList:result.rows})
  })
}

// localhost:3000/task/1
function getOneTask(req,res) {
  let SQL = `SELECT * from tasks WHERE id=$1;`;
  // let value = []
  // { taskID: '1' }
  // console.log(req.params);
  let value = [req.params.taskID];
  client.query(SQL,value)
  .then(result=>{
    // console.log(result.rows);
    res.render('oneTask',{task:result.rows[0]})
  })
}

function showForm(rew,res) {
  res.render('showFormPage')
}

function addTaskHandler(req,res) {
  console.log(req.body);
  let SQL = `INSERT INTO tasks(title,description,contact,status,category) VALUES ($1,$2,$3,$4,$5)RETURNING id;`;
  let value = req.body;
  let safeValues= [value.title,value.description,value.contact,value.status,value.category];
  client.query(SQL,safeValues)
  .then((result)=>{
    // res.redirect('/');
    console.log(result.rows);
    res.redirect(`/task/${result.rows[0].id}`);
  })
}

app.get('*', (req, res) => {
  res.status(404).send('This route does not exist')
});

function errorHandler(error, request, response) {
  response.status(500).send(error);
}

client.connect()
.then(() => {
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
})



