
//  Inheritance

// Parent Class
class Person{
    constructor(name, age, gender){
        this.name= name
        this.age = age
        this.gender = gender
    }

    details(){
        console.log( `Name : ${this.name}` )
        console.log( `Age : ${this.age}` )
        console.log( `Gender : ${this.gender}` )
    }
}

let a = new Person('manish', 24 , 'Male')
a.details()


// Child class
class Employee extends Person{
    constructor(name, age, gender, id){
        super(name, age, gender) // refering to parent class
        this.id =id
    }

    details(){
        super.details()
        console.log('Id :', this.id)
    }
}

let b  = new Employee('manishbrab', 24, 'Male', 54616)
console.log(b)
b.details()

// --------------------------------------------------------

// 'this' keyword usage


// 1. Direct function calling
function aaa(){
    console.log(this)
}
aaa() // returns => Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// 2. Object calling => points the obj in which the fn with 'this' keyword is present.

let ob = {
    a : 10,
    b : 'helo',
    fn : function(){
        console.log(this) // 'this' points to entire object ({a: 10, b: 'helo', fn: ƒ})
    }
}
ob.fn() // {a: 10, b: 'helo', fn: ƒ}


// 2.a

let ob2 = {
    a : 10,
    b : 'helo',
    fn : function(){
        function s(){
            console.log(this) // window => direct fucntion calling
        }

        s()
    }
}

ob2.fn()


// 3. Constructor Calling: points to the newly created object.

function newCont(){
    console.log(this)
}

let abc = new newCont() // points to object abc

let defg = newCont() // points to object defg
//--------------------------------------------

// 4. indirect Calling  --> call(), apply() and bind()

let hgh ={
    a : 10,
    fn : function(x, y){
        console.log(this.a, x, y)
    }

}

let hgh2 = {
    a : 2000
}

hgh.fn(); // 10 undefined  undefined
console.log(hgh2.a) // 2000 100 4646


hgh.fn.call(hgh2, 100, 4646) // making object hgh refer to object hgh2 => 2000 (this.a in hgh() refers to a = 2000 in hgh2() )

hgh.fn.apply(hgh2,[ 100, 4646]) // making object hgh refer to object hgh2 => 2000 (this.a in hgh() refers to a = 2000 in hgh2() ) --> parameter to be sent as arrays.

let bb = hgh.fn.bind(hgh2,[ 100, 4646])  // copies the fn

bb() // 2000 (2) [100, 4646] undefined
//  ---------------------------------------------------------
// 5. Arrow function

// const sum = (a, b) => a + b // creating function usin arrow fn.

// console.log(sum(10, 5))


// let obj4 = {
//     a: 10,
//     a : 23,
//     fn : () =>{
//         console.log(this) //f window

//         function abe(){
//             console.log(this) // window
//         }

//         abe()
//     }
// }

// obj4.fn();

// let obj5 = () =>{
//         console.log(this) //f window

//          abe : () =>{
//             console.log(this) // window
//         }

//         abe()
//     }

// obj5.abe