var prompt = require('prompt-sync')();

var categoryName = prompt("Enter Category Name = ");
var itemName = prompt("Enter Item Name = ");
var price = parseFloat(prompt("Enter Price of one item = "));
var quantity = parseInt(prompt("Enter Quantity = "));
var discount = parseInt(prompt("Enter Discount Percentage = "));

var d = (price*quantity*discount)/100;
var total = (price*quantity) - d;

console.log("----------------------------------------");
console.log("Aaryan");
console.log("STOCK MANAGEMENT SYSTEM\n\n");
console.log("Item Category Name : " + categoryName);
console.log("Item Name : " + itemName);
console.log("Price of One Item : " + price);
console.log("No. of items purchased : " + quantity);
console.log("Discounted Amount : " + d);
console.log("Total Billed Amount : " + (price*quantity));
console.log("Payable Amount : " + total);
