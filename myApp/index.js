// const http = require('http');
// var server = http.createServer((req, res)=>{
//     if(req.url == "/"){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<h2>Welcome to Home Page...</h2>');
//         res.end();
//     }else if(req.url == "/admin"){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<h2>Welcome to Admin Page...</h2>');
//         res.write(req.url);
//         res.end();
//     }else{
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<h2>Invalid Request!!!</h2>');
//         res.end();
//     }
    
// });
// server.listen(5052);

var express = require('express');
var app = express();
var fs = require('fs');

// app.get('/admin', (req, res)=>{
//     res.send('<h2>Welcome Home</h2>');
// });

// app.listen(8080);

app.get('/users', (req, res)=>{
    fs.readFile(__dirname + "/user.json", 'utf-8', (err, data)=>{
        if(err) console.log("Error generated")
        else console.log(data);
        res.end(data);
    });
});

app.listen(8080);