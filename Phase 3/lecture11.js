
// Synchronous : runs line by line

console.log('study start')
console.log('studing for 1 min')
console.log('study end')

// Asynchronous: 

console.log('study start') 

// want to delay execution delay for 2sec
setTimeout( () => {console.log("study for 2 sec")}, 3000 )
// exection is delayed 2secs

console.log('study end')