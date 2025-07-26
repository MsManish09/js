
// Synchronous : runs line by line

console.log('study start')
console.log('studing for 1 min')
console.log('study end')

// Asynchronous: 

// console.log('study start') 

// // want to delay execution delay for 2sec
// setTimeout( () => {console.log("study for 2 sec")}, 3000 )
// // exection is delayed 2secs

// console.log('study end')

// --------------------------------

console.log('manish')

setTimeout(() => {
    console.log("hwllo after 4sec")
},4000);

setTimeout(() => {
    console.log("hwllo after 2sec")
},2000);


console.log('Bye')