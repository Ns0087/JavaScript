const http = require('http');

http.createServer(function(req, res) {

res.writeHead(200, {'Content-Type' : 'text/html'});
res.write('<html>');
res.write('<head>');
res.write('<title>Test Page</title></head>');
res.write('<body>');
res.write('<center>');
res.write("<h1>Welcome to First Test Page of Node Js</h1><br><br>");
res.write("<h3>This is Nitin Saraswat</h3><br><br>");
res.write('</center>');
res.write('</body>');
res.write('</html>');
res.end("<br><br>Thank You");

}).listen(8080);