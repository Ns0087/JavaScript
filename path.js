var path = require('path');
var fs = require('fs');

//var filename = path.basename(__filename);   //for the basic filename
// var filename = path.dirname(__filename);   //for directory name
// var filename = path.extname(__filename);   //for extension name
// var filename = path.normalize(__filename);   //for normalise the file name
// console.log(filename);

var filename = path.join(__dirname, 'filestore');   //for create a file in another file
const filepath = `${filename}/xyz.txt`;   //for create a file in another file
console.log(filepath);
fs.writeFileSync(filepath, "This is a path example");   //writing the new file
console.log("File is created");                         //success message
var x = fs.readFileSync(filepath, 'utf-8');             //Reading that file
console.log(x);