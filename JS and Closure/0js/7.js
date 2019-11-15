function copyArrayAndMultiplyBy2(array, instructions){
    const output = []
    for(let i=0; i< array.length; i++){
        output.push(instructions(array[i]))
    }
    return output
}

// const myArray = [1,2,3]

// function multiplyBy2(input){return input * 2}

const multiplyBy2 = function (input) {
    return input * 2
}

const result = copyArrayAndMultiplyBy2([1,2,3] , multiplyBy2)
