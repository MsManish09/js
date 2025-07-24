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

// -----------------------------------------------------


// Prototype

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


// --------------------------------------------------------------------------------
