//------------------------------------Asynchornous-------------------------------------
// function createFile(){
//     setTimeout(()=>{
//         console.log("file created");
//     }, 1000);  
// }

// function readFile(){
//     console.log("data");
// }

// createFile();
// readFile();

//------------------------------------Synchornous using setTimeout and hardcoded wait time-------------------------------------

// const fs = require('fs');
// function createFile(){
//     setTimeout(()=>{
//         console.log("file created");
//     }, 1000);  
// }

// function readFile(){
//     setTimeout(() => {
//         console.log("data");
//     }, 2000);
// }

// createFile();
// readFile();

// 

//------------------------------------callback function chaining-------------------------------------
// const fs = require('fs');
// //function createFile(callback){
// function createFile(cb){
//     setTimeout(()=>{
//         fs.writeFileSync('abc.txt', 'This is callback Example');
//         console.log("File created");
//         //callback();
//         cb();
//     }, 1000);  
// }

// function readFile(callback){
//     setTimeout(() => {
//         var r = fs.readFileSync('abc.txt');
//         console.log(r.toString());
//         callback();
//     }, 100);
// }

// function workDone(){
//     console.log("Success");
// }
// createFile(()=>{
//     readFile(()=>{
//         workDone();
//     });
// });

//----------------------------callback hell - nested callback confusing readability problem------------------------

//************************************ Promises ************************************
// const fs = require('fs');
// const { resolve } = require('path');
// function createFile(){
//     return new Promise((resolve, reject)=>{
//         fs.writeFileSync('abc.txt', 'This is Promise Example');
//         console.log("File created");
//         resolve();
//     }); 
// }

// function readFile(){
//         var r = fs.readFileSync('abc.txt');
//         console.log(r.toString());
// }

// function workDone(){
//     console.log("Success");
// }

// createFile().then(readFile);
// workDone();

//************************************ Promises Chaining************************************
// const fs = require('fs');
// const { resolve } = require('path');
// function createFile(){
//     return new Promise((resolve, reject)=>{
//         fs.writeFileSync('abc.txt', 'This is Promise Example');
//         console.log("File created");
//         resolve();
//     }); 
// }

// function readFile(){
//     return new Promise((resolve, reject)=>{
//         var r = fs.readFileSync('abc.txt');
//         console.log(r.toString());
//         resolve();
//     });   
// }

// function workDone(){
//     console.log("Success");
// }

// createFile().then(readFile).then(workDone);


//********************************Await and Async function - Promise Await ****************************************
const fs = require('fs');
const { resolve } = require('path');
function createFile(){
    return new Promise((resolve, reject)=>{
        fs.writeFileSync('abc.txt', 'This is Promise Example');
        console.log("File created");
        resolve();
    }); 
}

function readFile(){
    return new Promise((resolve, reject)=>{
        var r = fs.readFileSync('abc.txt');
        console.log(r.toString());
        resolve();
    });   
}

function workDone(){
    console.log("Success");
}

//createFile().then(readFile).then(workDone);

async function Authent(){
    try{
        await createFile();
        await readFile();
        await workDone();
    }
    catch(err){
        console.log(err);
    }
}

Authent();