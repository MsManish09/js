
console.log(a) // General Hoisting - undefined
var a = 10

// TDM HOISTING

// console.log(b) // TDM --> Reference Erroe | code Execution ends here.
// console.log(c) // TDM --> Reference Erroe
// let c = 10
// const b = 30


// -------------------------------------------

// Higher order function.

// 1. fn(a) taking another fn(b) as args. fn(a) is HOF

// HOF Function....
function o(x){
    console.log('this is function o')
    x() // This is function p
}
 
// Call back function...
function p(){
    console.log('this is function p') 
}

o(p) // function o is HOF.

// 2. A Fn(a) returns another fn(b) and a parameter, that fn(a) is HOF

function g(){
    console.log('this is function g')

    function h(){
        console.log('this is funciton h')
    }

    return h
}

u = g() // this is function g
console.log(u)  // ƒ h(){
//         console.log('this is funciton h')
//     }   -------------> fn g is hof

// -------------------------------------------------------


// Array Methods

let arr = [10, 20, 30, 40]

b = arr.push(25) // returns arr lenght.
console.log(arr, b) // arr and arr 

let r = arr.pop() // removes and return a element from the end
console.log(r) // 25

b = arr.unshift(70, 60 , 80) // adds new elements at the start
console.log(arr, b) // [70, 60, 80, 10, 20, 30, 40],  length - 7

r = arr.shift() // remove 1st element for a array and  returns it
console.log(arr, r) // [60, 80, 10, 20, 30, 40], removed element - 70




// forEach()

let newArr = [100, 200,660, 710, 520, 300, 400, 500]

newArr.forEach(element => {
    console.log(element) // 100, 200, 300, 400, 500
});

newArr.forEach(function(item, index)
{
    console.log(`Value: ${item}, at indes: ${index}`)
    // output
    // Value: 100, at indes: 0
    // Value: 300, at indes: 2
    // Value: 400, at indes: 3
    // Value: 500, at indes: 4
    // Value: 200, at indes: 1
})

// sum of arr
let arrsum = 0
newArr.forEach(function(item, index){
    arrsum += item
})

console.log(arrsum)

// sort
newArr.sort() // sorts array in ascending order. 
console.log(newArr) // [100, 200, 300, 400, 500, 520, 660, 710]


//  map()

let latestArr = newArr.map(function(item, index)
{
    return item + item
})
console.log(latestArr) // [200, 400, 600, 800, 1000, 1040, 1320, 1420]


// msp() --> shorthand
let latestArrshorthand = newArr.map(item =>
{
    return item + item
})
console.log(latestArrshorthand) // [200, 400, 600, 800, 1000, 1040, 1320, 1420]