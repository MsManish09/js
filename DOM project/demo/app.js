class Student{
    constructor(sl,name, id, email, reg_course, contact_no){
        this.sl = sl
        this.name = name
        this.id = id
        this.email = email
        this.course = reg_course
        this.contact_no = contact_no
    }

    
}     
let id = 84116;
let student = new Student(1, 'name', 84116, 'iabnia', 'cs', 41619619616)


localStorage.setItem(id, JSON.stringify(student)); // converts object into string

// Retrieve and convert back to object
let storedStudent = JSON.parse(localStorage.getItem(id)); // converts string back to objects
 
console.log(storedStudent);
