'use strict';
require('dotenv').config();

const express = require('express');
const superagent = require('superagent');
const cors = require('cors');
const pg = require('pg');
const methodOverride = require('method-override');


const app = express();
const PORT = process.env.PORT || 3000;
const client = new pg.Client(process.env.DATABASE_URL);

app.use(cors());
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.use(methodOverride('_method'));

app.get('/',showHomePage);
app.post('/signin',signinFun);
app.post('/addTask',addTaskFunc);
app.get('/myTodoList',showMyTodListFunc);

var usernamedata = '';

function showHomePage(req,res) {
    console.log('iiiiiiiiiii',usernamedata);
    if(usernamedata!='') {
        res.render('addTask',{data:usernamedata});
    } else {
        res.render('index');
    }
}

function signinFun(req,res) {
    usernamedata = '';
    console.log(req.body);
    let {username,password} = req.body;
    let SQL = 'SELECT * FROM  users WHERE username= $1 AND password=$2;';
    let values = [username, password];
    console.log(values);
    client.query(SQL, values)
        .then(results => {
            console.log(results.rows);
            if (results.rows.length) {
                console.log('username existed')
                usernamedata = results.rows[0].username;
                console.log('nnnnnnn',usernamedata);
                res.render('addTask',{data:usernamedata});
            } else {
                console.log('username does NOT exist');
            }
        });
}

function addTaskFunc(req,res) {
    let {t_name, t_date} = req.body;
    let userid='';
    let sql = `SELECT * FROM users WHERE username=$1;`;
    let values = [usernamedata];
    client.query(sql,values)
    .then((results)=>{
        // console.log(results.rows);
        userid=results.rows[0].u_id;
        console.log('aaaa',userid);
        let sql2=`INSERT INTO tasks (t_name,t_date,u_id) VALUES ($1,$2,$3);`
        let values2 = [t_name,t_date,userid]
        client.query(sql2,values2)
        .then((results)=>{
            res.redirect('/myTodoList');
        })
    });
}

function showMyTodListFunc(req,res) {
    let sql = `SELECT * FROM tasks JOIN users ON tasks.u_id=users.u_id WHERE username =$1;`;
    let values = [usernamedata];
    client.query(sql,values)
    .then(results=>{
        console.log(results.rows);
        res.render('myTodoList',{data:results.rows});
    })
}

client.connect()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Listening on PORT `,PORT);
    })
})
