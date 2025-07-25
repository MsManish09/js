
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



