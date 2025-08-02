
/*

function handleh1(){
    console.log('welcome to DOM events')
}

console.log('dom events')

function click(){
    console.log('selection -> add attribute...')
}

// 2nd way. select and add attribute.
let h2 = document.querySelector('h2')
h2.onclick = click; // every time the h2 is click, click fn is called.


*/
// -------------------------------------------------------


// task: 

let red1 = document.querySelector('#red')
let green1 = document.querySelector('#green')
let blue1 = document.querySelector('#blue')

let mainbody = document.getElementById('body')
let but = document.get

function turnBlood(){
    mainbody.className =""
    mainbody.classList.add('red')
    
}

function turnGreen(){
    mainbody.className =""
    mainbody.classList.add('green')
    
}

function freeze(){
    mainbody.className =""
    mainbody.classList.add('blue')
}

red1.onclick = turnBlood
green1.onclick = turnGreen
blue1.onclick = freeze

// task end -------------------------------------------


// 3rd way:

let  p = document.querySelector('p')

let icecream = () =>{console.log('Ice Cream')}
let cake = () => {console.log('Chocolate Cake')}

p.addEventListener('click', icecream)
p.addEventListener('click', cake)
// both event are executed


// for input events

let intEl = document.querySelector('input')

// intEl.addEventListener('input', (event)=>{
//     console.log(event)
//     console.log(event.target) // .target:  one of the methods to know what triggered it.
//     console.log(event.target.value = "default value") // to access the value., ='default value' is to set default value, cant seen on the screen
// })


intEl.addEventListener('keydown', (e)=>{
    console.log(e.target.value) // using downkey.
})

// -----------------------------------------------------