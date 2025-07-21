   
let arr = [1, 2 ,3, 5, 7, 10]


let obj = {
    a: 10,
    b: "hello", 
    c: true,
    d_fn : function(){
        console.log( "this is method, fucntions inside a object  (obj))" )
    }
}

console.log(obj.d_fn())
obj.d_fn()

for (let elements of arr){
    console.log(elements)
} // for (in) used to iterate arrays

// for (of) used to iterate objects

for (let keys in obj){
    console.log(keys)
    console.log(obj[keys])
} // for (in) used to iterate over objects



// 3 declaratives...

// var
var a = 100 // declared yes
console.log(a)

a = 120 // reassigned | yes
console.log(a)

var a  = 200 // redeclared and reassigned | yes
console.log(a)

// let

let b = 100
console.log(b)

b = 200 // reassigned | yes
console.log(b)

//  cant do the below, throws a error. cant reassign
// let b = 120; // redeclared | no

// Const

const c = 100 
console.log(c)

// c = 2500; // cant reassign and redeclare.
// console.log(c) // error

// ---------------------------------------------------------------------------