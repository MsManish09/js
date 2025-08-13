class Student{
    constructor(name, id, email, reg_course, contact_no){
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

const ids= []

const registered_studends_list = [] // store all student object in a array
let sl = 0 //  number of registred students count.

let add_btn = document.querySelector('#add_student_btn')
add_btn.addEventListener('click', add_student)


function add_student(event){
    sl += 1 // update count

    event.preventDefault();   // to prevetn window refresh.
   

    let name = document.querySelector('#name').value
    let student_id = document.querySelector('#std_id').value
    let email = document.querySelector('#email_id').value
    let contact_no = document.querySelector('#contact_no').value
    let reg_course = document.querySelector('#registered_course').value

    // if any of the input field is empty, doesnot create the student object
    if (!name || !student_id || !email || !contact_no || !reg_course) {
         alert("Error: All fields must be filled out before submitting.");
        return; // stop from creating the student object.
    }
    
    
    // dont add studetn if id already exist
    if(ids.includes(student_id)){
        alert('student id already exist.')
        location.window.reload()
    }

    ids.push(student_id)
    
    let student = new Student(name, student_id, email, reg_course,  contact_no) // create individual student objecct

    localStorage.setItem(student_id, JSON.stringify(student)) // store student object in local storage

   

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

    // select table body
    let table_body = document.querySelector('#table_data_body');
    table_body.innerHTML = '' // empty the table body to add new rows

    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i)

        // my broswer was automatically creating these key-value in localStorage, so i'm using if statment to ignore those values.
        if(key === 'i18nextLng' || key === 'debug'){
            continue
        }

        let student = JSON.parse(localStorage.getItem(key))

        let row = document.createElement('tr')

        row.innerHTML = `
        <td>${i}</td>
        <td>${student.name}</td>
        <td>${student.id}</td>
        <td>${student.email}</td>
        <td>${student.course}</td>`;

        table_body.appendChild(row)
    }

}

window.addEventListener('DOMContentLoaded', display_students_data);



// adding delete funtionality...

const delete_btn = document.querySelector('#delete_student')

delete_btn.addEventListener('click', ()=>{
    alert('delete button is pressed')
})

console.log(  localStorage.length  )

