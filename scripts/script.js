function greet(promptname,dayTime = 'day'){
    console.log(`Good ${dayTime} ${promptname}!`)
}
// const greet = function(promptname){
//     console.log(`Hello ${promptname}!`)
// }
// let greet = (promptname) => {
//     console.log(`Hello ${promptname}!`)
// }
// user = prompt("Name?:")
// timewhen = prompt("Time?")
// greet(user)
function circleArea(radius){
    return Math.PI*radius**2
}
rad = prompt("Enter radius:")
alert(`The area of a circle with radius ${rad} is ${circleArea(rad).toFixed(2)}.`)