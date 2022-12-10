var mysql = require("mysql");

var con = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "",
    database: "nitindb"
});

con.connect((err) => {
    if(err) console.log(err);
    else console.log("Connected");
    var query1 = "create table student (id int, name varchar(50), gender varchar(50), city varchar(50))";
    con.query(query1, (err)=>{
        if(err) console.log(err);
        else console.log("Table created successfully");
    })
});