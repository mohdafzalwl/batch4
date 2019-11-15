const selectedDivInHtml = document.getElementById('selectDiv')
console.log(selectedDivInHtml)
let newHeader = document.createElement('h1')
newHeader.innerHTML = "hello new H1"
console.log(newHeader)
 selectedDivInHtml.appendChild(newHeader)
const friends = ["tom " ,"plant" , "smacky"]

const selectedListinHtml = document.getElementById('list')
friends.map(function(newList) {
    console.log("return new array" , newList)
    const newLi = document.createElement('li')
    newLi.innerHTML = newList
   
 selectedListinHtml.appendChild(newLi) 
})

//selectedListinHtml.appendChild(FriendList)

/// Generate random color 
/// RGB - 0-256
/// Apply to the body 
///update the color on event 
const generateColorValue = ()=> Math.floor(Math.random * 256)
const createColor = ()=>{
    const red = generateColorValue()
    const blue = generateColorValue()
    const green = generateColorValue()
    return `rgb(${red},${blue},${green})`
}
const applyColorToBody = (color)=> {
    
    return (document.body.style.backgroundColor = color) 
}
const addRandomColorToBg =()=>{
    const color = createColor()
    return applyColorToBody(color)
}
addRandomColorToBg()



