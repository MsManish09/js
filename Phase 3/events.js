
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