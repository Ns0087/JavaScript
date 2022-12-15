const EventEmiter = require('events');
const fs = require('fs');
const event = new EventEmiter();

event.on('abc', ()=>{
    var r = fs.readFileSync("abc.txt");
    console.log(r.toString());
});

event.on('abc', ()=>{
    var r = fs.writeFileSync('abc.txt', 'This is Event Exampe');
    console.log('File Written');
});

//Event Emit
event.emit('abc');
console.log("end");

const os = require('os');
// var x = 1024*1024*1024;
// console.log(os.freemem()/x);
const tfree = os.totalmem();
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());

