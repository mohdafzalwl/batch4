
function outer(){
   var  counter = 0 
  function incrementCounter(){ return  counter++ }
   return incrementCounter
}

const myNewFunction = outer()

myNewFunction()
myNewFunction()


//Closure gives our functions persistent memories and entirely new toolkit for writing professional code 
//- Helper Functions : memoize 
// - Module pattern  - preserve the state for the life of an application without polluting the global namespace 
// - Async js 