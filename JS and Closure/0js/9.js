//Closure 
//- Enables powerful pro -leve functions like memoize
// Many javascript design patterns including the module pattern use closure
// Build iterators , handle partial application and mantain state in an asynchronous 


// Functions get a new Memory every run/invocation 
function multiplyBy2(inputNumber){
    const result = inputNumber * 2
    return result
}

const output = multiplyBy2(7)
const newOutput = multiplyBy2(10)

//What if function could have permanent memory >>>??????????

//Function with memories 
//// - when our function get called , we create a live store of data (local memory / variable environment /state) for that functions execution context 
//// - When the function finishes executing , its local memory is deleted (except the return value)
//// - But what if our functions could hold on to live data between executions ?
//// - This would let our function definitions hav an associated cache/persistent memory
//// - But it all starts with us returning a function from another function 

