// console.log( document  )
// --------------------------------------------------------
// --------methods to target elements----------------------
// --------------------------------------------------------

// getElementById
// getElementsByClassName
// by tag
// byt element

// let myParagraphs = document.getElementsByClassName('paragraph')
// console.log(myParagraphs)

// --------------------------------------------------------
// -----------------------querySelector--------------------
// --------------------------------------------------------

// // use # to target ids
// let title = document.querySelector('#title1')

// // use . to target classes
// let myParagraph = document.querySelector('.paragraph')

// // use the element name to target elements
// let header = document.querySelector('h5')

// let element = document.getElementById('title1')

// --------------------------------------------------------
// ----------------querySelectorAll------------------------
// --------------------------------------------------------
// let allParagraphs = document.querySelectorAll('.paragraph')
// console.log(allParagraphs)

// --------------------------------------------------------
// -------- targetting specific elements ------------------
// --------------------------------------------------------
// let myInput = document.querySelector('.myInputs input[type="text"]')
// //console.log(myInput)

// let allParagraphs = document.querySelectorAll('.paragraph')
// //console.log(allParagraphs)

// // allParagraphs is a NodeList
// allParagraphs.forEach( (singleParagraph, index) => {
//            // console.log(singleParagraph.classList)  
//             //targetting by class
//             if (singleParagraph.className.includes('newClass')) {
//                 // console.log('This paragraph has newClass')
//                 // console.log(singleParagraph.innerText)
//             }
          
//             // targetting by index  
//             if (index == 1) {
//                 //console.log(singleParagraph)
//             }
// } ) 

// --------------------------------------------------------
//  ------------- dom methods/properties ------------------
// --------------------------------------------------------

// we saw
// innerHTML, innerText, setAttribute, value, id, className, classList, style

// element.setAttribute('class', 'my title')
// element.id = 'myId'

// element.classList.add('newClass') // add the class to the class attribute
// element.classList.remove('title')
// // element.className -> gives all classes as string
// // element.innerText 
// // element.innerHTML

// element.style.color = 'red'
// element.style.marginLeft = '30px'


// // innerText vs innerHTML

// // let section = document.querySelector('.products')
// // console.log(section)
// // console.log(section.innerHTML)
// // console.log(section.innerText)

// --------------------------------------------------------
// -------------------SUPER IMPORTANT----------------------
// --------------------------------------------------------

// ----- you can use the `.queryselector` on any DOM element 

// let section = document.querySelector('.products')
// console.log(section)

// let header5 = section.querySelector('h5')
// console.log(header5)

// --------------------------------------------------------
// -------------------Activity 1---------------------------
// --------------------------------------------------------
/*
console.log('Works')
// 1: Get the node with the  main title

    let myH1 = document.querySelector('h1')
    console.log(myH1)

// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

    console.log(myH1.innerText)

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

    let fruits = document.querySelectorAll('.fruit-item')
    console.log(fruits)
// => NodeList(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text
// think about loops, innerText vs innerHTML

    let veggies = document.querySelectorAll('.veggie-item')
    veggies.forEach((singleVeggie) => {
        // grab the text inside the elements with the innerText
        console.log(singleVeggie.innerText)
    })

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Add a class 'best-fruit' to the 1st and the 3rd fruit
// think about loops, ways to add classes to an element

let fruits1 = document.querySelectorAll('.fruit-item')
    fruits1.forEach((singleFruit, index) => {
        if (index == 0 || index == 2) {
            // add classes using  .classList.add
            singleFruit.classList.add('best-fruit')
        }
    })


// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 6: Remove class 'veggie-item' from 'spinach'

let veggies1 = document.querySelectorAll('.veggie-item')
    veggies1.forEach((singleVeggie) => {
          if (singleVeggie.innerText === 'Spinach') {

            // remove classes using 'classList.remove'
            singleVeggie.classList.remove('veggie-item')

            // className -> overrides the class
            singleVeggie.className = 'veggie-love'
          }
    })

// => ... <li class="veggie-love">Sp

*/

// --------------------------------------------------------
// -------------------EVENT LISTENERS----------------------
// --------------------------------------------------------


// 1. target the DOM element
// 2. add an event listener to it
/*
let title = document.querySelector('h1')

title.addEventListener('click'  , () => {
        console.log('Mouse clicked on fruits and veggies')
})

title.addEventListener('mouseover', () => {
    title.style.color = 'red'
})

title.addEventListener('mouseout'  , () => {
    title.style.color = 'blue'
})
*/


// targer two buttons

function incrementHandler(){
    let increment = document.querySelector('#increment')
    increment.addEventListener('click', () => {
        let number = document.querySelector('#counter span') 
        number.innerText = Number(number.innerText) + 1
        // when number isgreater that 15
        // show an alert with some message
        if (number.innerText == 15) {
                window.alert('Max number reached dude')
        }
    })
}


function decrementHandler(){
    let decrement = document.querySelector('#decrement')
    decrement.addEventListener('click', () => {
        let number = document.querySelector('#counter span') 
        number.innerText = Number(number.innerText) - 1
        if (number.innerText == 0) {
            window.alert('Min number reached dude')
        }
    })
}


// submit event listeners
function submitHandler(){
    let form = document.querySelector('#myForm')

    // to remove a dom element 
    //form.remove()

    form.addEventListener('submit', (event) => {
        // has the be the first thing in submit event listeners
        // prevents the default behaviour of the browsers
        // check the url always as to what the default behaviour is 
        event.preventDefault()
         
        //let number = document.querySelector('#myForm input[type="number"]')
        let number = document.querySelector('#number')
        let name = document.querySelector('#name')
        
        
        // add it in the ul in an li?

        let myNewElement = document.createElement('li')
        myNewElement.innerHTML = `<div>${name.value} is ${number.value} years old</div>`
        console.log(myNewElement)

        let ul = document.querySelector('#output')
        ul.appendChild(myNewElement)

        //clear the inputs ?
        number.value = ""
        name.value = ""
    })

}


window.addEventListener('load', ()=> {
    //incrementHandler()
    //decrementHandler()
     submitHandler()
})



