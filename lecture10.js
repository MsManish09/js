
//  Inheritance

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

class Employee extends Person{
    constructor(name, age, gender, id){
        super(name, age, gender)
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