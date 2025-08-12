class Student{
    constructor(sl,name, id, email, reg_course, contact_no){
        this.sl = sl
        this.name = name
        this.id = id
        this.email = email
        this.course = reg_course
        this.contact_no = contact_no
    }
     
    // display registered student data
    // display(){
    //     let table_body = document.querySelector('#table_data_body')

    //     let row = document.createElement('tr')

    //     row.innerHTML = `<tr><td>${this.sl}</td><td>${this.name}</td><td>${this.id}</td><td>${this.email}</td><td>${this.course}</td></tr>`;
    //     table_body.appendChild(row)
    // }
}

const registered_studends_list = [] // store all student object in a array
let sl = 0 //  number of registred students count.

let add_btn = document.querySelector('#add_student_btn')
add_btn.addEventListener('click', add_student)


function add_student(event){
    sl += 1 // update count
    event.preventDefault(); // to prevetn window refresh.

    let name = document.querySelector('#name').value
    let student_id = document.querySelector('#std_id').value
    let email = document.querySelector('#email_id').value
    let contact_no = document.querySelector('#contact_no').value
    let reg_course = document.querySelector('#registered_course').value

    // if any of the input field is empty, doesnot create the student object
    if (!name || !student_id || !email || !contact_no || !reg_course) {
        // alert("Error: All fields must be filled out before submitting.");
        return; // stop from creating the student object.
    }
    
    
    let student = new Student(sl, name, student_id, email, reg_course,  contact_no) // create individual student objecct

    localStorage.setItem(student_id, JSON.stringify(student)) // store student object in local storage


    // registered_studends_list.push(student); // add present student object to a array.

    // student.display() // displays registred students data

    // display registered student
    display_students_data()

    clearInputs() // clears input field
    // alert('Student successfully Registered...')

}

let input_fields = document.querySelectorAll('input')

// functioon to clear the input fields for newer entries.
function clearInputs(){
    for (let inp of input_fields){
       inp.value = '';
    }
}

// function to display localStorage data 

function display_students_data(){
    for(let i = 0; i < localStorage.lengt; i++){
        let key = localStorage.key(i)
        let student = JSON.parse(localStorage.getItem(key))

        let table_body = document.querySelector('#table_data_body')

        let row = document.createElement('tr')

        row.innerHTML = `<tr><td>${student.sl}</td><td>${student.name}</td><td>${student.id}</td><td>${student.email}</td><td>${student.course}</td></tr>`;
        table_body.appendChild(row)
    }

}




// adding delete funtionality...

const delete_btn = document.querySelector('#delete_student')

delete_btn.addEventListener('click', ()=>{
    alert('delete button is pressed')
})

console.log(  localStorage.length  )

