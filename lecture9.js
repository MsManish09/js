/*

function m(){
    var a = 100
    var b = 200
    let c = 300

    function n(){
        console.log(a)
        console.log(c)
    }

    return n
}

let result = m() // n() is returned along with var a, let c. Because n() is depended on var a and let c => Closure.

result() // 100 (a) 300(c)

*/

// -----------------------------------------------------


// Prototype
/*
function Person( name, age ){
    this.name= name
    this.age = age
    this.greet = function()  {console.log(`hello, ${this.name}`)}
}

let person1 = new Person('Manish', '24') // constructor fn()

console.log(person1) // Person {name: 'Manish', age: '24', greet: ƒ}
console.log(person1.salary) // undefined

console.log(person1.length) // length property is not present in m(), but still we can access it, because it is present in Object.prototype and person1 fallbacks on this prototype.


console.log(typeof(null)) // object

let arr = [1, 2, 3]
console.log( arr.__proto__ == Array.prototype ) // true
console.log(Array.prototype.__proto__ === Object.prototype) // True
// so array is a object


let str = 'manish'
console.log(typeof(str)) // string
console.log(str.__proto__ === String.prototype) // True
console.log(String.prototype.__proto__ === Object.prototype) // true
// so string is a object


let num = 20
console.log(typeof(num)) //number
console.log(num.__proto__ === Number.prototype) // true
console.log( num.__proto__.__proto__ === Object.prototype ) // true
// so number is a object

*/
// --------------------------------------------------------------------------------

// constructors

function Employee(name, age, salary){
    this.name = name
    this.age = age
    this.salary = salary

    this.details = function(){  // Creating a fucntion inside a constructor
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
        console.log(`Salary: $ ${this.salary}`)
    }
}

let emp = new Employee('manish', 24, 254155) 
console.log(emp) // Employee {name: 'manish', age: 24, salary: 254155, details: ƒ}

emp.details() 
/*
Name: manish
lecture9.js:74 Age: 24
lecture9.js:75 Salary: $ 254155
*/ 

// ----------------------------------------------------------

// Classes

class ClassEmployee{
    constructor(name, age, salary){
        this.name = name
        this.age = age
        this.salary = salary
    }

    // creating methods inside class

    empDetails(){
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
        console.log(`Salary: $ ${this.salary}`)
    }
}

let employee1 = new ClassEmployee('manish ms', 24, 514848)

console.log(employee1) // ClassEmployee {name: 'manish ms', age: 24, salary: 514848}

employee1.empDetails()
/*
Name: manish ms
lecture9.js:104 Age: 24
lecture9.js:105 Salary: $ 514848
*/