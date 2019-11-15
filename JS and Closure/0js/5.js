//Generalize function - and pass specific instructions only when we run copyArayAndManipulate

function copyArrayAndMultiplyBy2(array, instructions){
    const output = []
    for(let i=0; i< array.length; i++){
        output.push(instructions(array[i]))
    }

    return output
}

// const myArray = [1,2,3]

function multiplyBy2(input){return input * 2}

const result = copyArrayAndMultiplyBy2([1,2,3] , multiplyBy2)



//HOW WAS THIS POSSIBLE ?
//FUNCTIONS IN JAVASCRIPT = FIRST CLASS OBJECTS
// THEY CAN CO-EXIST AND CAN BE TREATED LIKE ANY OTHER JAVASCRIPT OBJECT
// 1. ASSIGNED TO VARIABLES AND PROPERTIES OF OTHER OBJECTS 
// 2. PASSED AS ARGUMENTS TO FUNCTIONS
//  3. RETURNED AS VALUES FROM FUNCTIONS






// which is our Higher order function ?

// the outer function that takes in a function is  our higher order function

//Which is our callback function 

// the function we insert is our callback function 

// Higher Order Functions
// 1. Declarative code 
