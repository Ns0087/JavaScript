var http = require('http');

var prompt = require('prompt-sync')();

var categoryName = prompt("Enter Category Name = ");
var itemName = prompt("Enter Item Name = ");
var price = parseFloat(prompt("Enter Price of one item = "));
var quantity = parseInt(prompt("Enter Quantity = "));
var discount = parseInt(prompt("Enter Discount Percentage = "));
var d = (price*quantity*discount)/100;
var total = (price*quantity) - d;

http.createServer(function(req, res) {

res.writeHead(200, {'Content-Type' : 'text/html'});
res.write('<html>');
res.write('<head>');
res.write('<title>SMS</title></head>');
res.write('<body>');
res.write('<center>');
res.write("<h1>STOCK MANAGEMENT SYSTEM</h1><br><br>");

res.write('<br>Item Category Name : ' + categoryName);
res.write('<br>Item Name : ' + itemName);
res.write("<br>Price of One Item : " + price);
res.write("<br>No. of items purchased : " + quantity);
res.write("<br>Discounted Amount : " + d);
res.write("<br>Total Billed Amount : " + (price*quantity));
res.write("<br>Payable Amount : " + total);
res.write('</center>');
res.write('</body>');
res.write('</html>');
res.end("<br><br>Thank You");

}).listen(8080);