//Calling a function in the same call as it was defined

function outer(){
    let counter = 0 
    function incrementCounter(){
        counter ++ 
    }
    incrementCounter()
}
outer()
