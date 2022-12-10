const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var mysql = require('mysql');
app.use(bodyParser.json());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nitindb'
});

con.connect((err) => {
    if(err) console.log(err);
    else console.log("Connected");
});

//Get all Data
app.get('/api/',(req, res) => {
    let sql = "SELECT * FROM student";
    let query = con.query(sql, (err, results)=> {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error":null, "response":results}));
    });
});

//Insert
app.post('/api/insert',(req, res) => {
    let data = {id: req.body.id, Name: req.body.name, Gender: req.body.gender, City: req.body.city};
    let sql = "Insert into Student SET ?";
    let query = con.query(sql, data, (err, results)=> {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error":null, "response":results}));
    });
});

//Update
app.put('/api/update/:id',(req, res) => {
    let sql = "Update Student SET Name = '" +req.body.name+ "', Gender = '" +req.body.gender+ "', City = '" +req.body.city + "' where id = " + req.params.id;
    let query = con.query(sql, (err, results)=> {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error":null, "response":results}));
    });
});

//Delete
app.delete('/api/delete/:id',(req, res) => {
    let data = req.params.id;
    let sql = "delete from student where id = "+ data;
    let query = con.query(sql, data, (err, results)=> {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error":null, "response":results}));
    });
});

app.listen(8000, function(){
    console.log("Listening on server on port 8000")
  });