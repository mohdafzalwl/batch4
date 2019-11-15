//What if want to copy array and add / 
function copyArrayAndAddBy2(array){
    const output = []
    for(let i=0; i< array.length; i++){
        output.push(array[i]+2)
    }
    return output
}

const myArray = [1,2,3]

const result = copyArrayAndAddBy2(myArray)


//What principle we are breaking ?????