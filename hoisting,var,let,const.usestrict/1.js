//One of the advantages of JavaScript putting function declarations into memory before it executes any code segment is that it allows you to use a function before you declare it in your code. 

function catName(name) {
    console.log("My cat's name is " + name);
  }
  
  catName("tom");

/////////////////////////////////////

catName("plant");

function catName(name) {
  console.log("My cat's name is " + name);
}
/////////////////////////////////////////
// Only declarations are hoisted
console.log(num);  
var num;
num = 6;
////////////////////////////////////
//If you declare the variable after it is used, but initialize it beforehand, it will return the value
num = 6;
console.log(num); // returns 6
var num;


////////////////////////
num()
 
var num = 6 ;

function num(){
console.log("num1");
}


function num(){
console.log("num2");
}
/////////////////////////////////