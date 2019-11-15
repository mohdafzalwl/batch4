// JS principles 
// Goes throught the code and runs/execute each line - knonwn as thread
// Saves data like strings and arrays so we can use that data later - in memory
//Functions - 
// Execution Context 
// created to run the code of a function - has 2 parts 
// - thread of execution 
// - Memory-
// Call Stack 
//// - Javascript keeps track of what function is currently running 
//// - Run a function - add to call stack
//// - Finish running the function - JS removes it from call stack
//// - whatever is top of the call stack 
////// - thats the functin we're currently running 

var num = 3 

function multiplyBy2(inputNumber){
    var result = inputNumber * 2
    return result
}

var output = multiplyBy2(num)

const newOutput = multiplyBy2(10)

