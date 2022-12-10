const file = require('fs');

//--------------------------------------------Synchronous--------------------------------------------
// file.writeFileSync('abc.txt', 'This is my first file');
// console.log('File created......');

// file.appendFileSync('abc.txt', ' New data added');
// console.log('File Appended......');

// var r = file.readFileSync('abc.txt', 'utf-8');
// //console.log(r.toString());
// console.log(r);

//file.truncateSync('abc.txt');
//console.log("File Truncated.......")

//file.unlinkSync('abc.txt');
//console.log('File Deleted......');

//--------------------------------------------Asynchronous-----------------------------------------------
// file.writeFile('abc.txt', ' This is my file', (exception)=>{
// if(exception) console.log("Error generated");
// else console.log('File Created......');
// });

// file.readFile('abc.txt', 'utf-8', (err, data)=>{
// if(err) console.log("Error generated")
// else console.log(data);
// });

// file.appendFile('abc.txt', ' this data is appended', (err)=>{
// if(err) console.log("Error generated");
// else console.log('File Appended......');
// });

// file.readFile('abc.txt', 'utf-8', (err, data)=>{
//     if(err) console.log("Error generated")
//     else console.log(data);
// });

// file.unlink('abc.txt', (err)=>{
//     if(err) throw err;
//     else console.log("File Deleted.....")
// })

const url = require('url');
var adr = 'https://stackoverflow.com/questions/15188079/string-equality-with-null-handling';
var t = url.parse(adr, true);
console.log(t.hostname);
console.log(t.pathname);
//console.log(t.query);
console.log(t.search);


