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
// function circleArea(radius){
//     return Math.PI*radius**2
// }
// rad = prompt("Enter radius:")
// alert(`The area of a circle with radius ${rad} is ${circleArea(rad).toFixed(2)}.`)
// document.querySelector('#radius').textContent = `Value ${rad} provided by the user.`;
// document.querySelector('#result').textContent = `The area of a circle with radius ${rad} is ${circleArea(rad).toFixed(2)}.`
const shoppinglistElement = document.querySelector('.shopping')
let shopping_items = ['cheese', 'bread', 'green pepper'];

function listMaking(myArr){
    for (item of myArr){
       let listItem = document.createElement('li');
       listItem.textContent = item;
        shoppinglistElement.appendChild(listItem);
    }
}
listMaking(shopping_items);

// shoppinglistElement.appendChild(listMaking(shopping_items))


function changeListStyle(myList) {
    shoppinglistElement.classList.replace('circleList','squareList')
}

changeListStyle()

function makeGreen(){
    const allListItems = document.querySelectorAll('.shopping li')
    for (item of allListItems){
        if (item.textContent.includes('green')){
            item.classList.add('greenlist');
        }

    }
}
makeGreen()