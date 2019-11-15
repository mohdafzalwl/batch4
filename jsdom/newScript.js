//Generate Random color 
const generateColorValue = function(){
    return Math.floor(Math.random()* 256)
}
const createColor = function(){
    const red = generateColorValue();
    const green = generateColorValue()
    const blue = generateColorValue()
    return `rgb(${red},${green}, ${blue})`
}
const applyColorToBody = function(color){
    return document.body.style.backgroundColor = color
}
const addRandomColorToBg = function (){
    const color = createColor()
    return applyColorToBody(color)
}
// console.log(addRandomColorToBg())
const interval = setInterval( addRandomColorToBg, 1000)
const newColors = document.getElementById('new-colors')
// newColors.onclick = ()=> addRandomColorToBg()
newColors.addEventListener('click' , ()=>clearInterval(interval))