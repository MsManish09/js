
// creating student class 

class Student{
    constructor(name, id, email, contact_no, course){
        this.name = name;
        this.id = id;
        this.email = email;
        this.course = course;
        this.contact_no = contact_no;
    }
}


// const ids = [] // array to store ids to prevent dupicate entries.
let count = 0 // to keep track off number of students registred.

let add_btn = document.querySelector('#add_std') // seleting add button


// displaying the student details
add_btn.addEventListener('click', ()=>{

    count += 1

    let std_name = document.querySelector('#std_name').value
    let std_id = document.querySelector('#std_id').value
    let std_email = document.querySelector('#std_email').value
    let std_contact = document.querySelector('#std_no').value
    let registerd_course = document.querySelector('#reg_course').value

    // if any input element is not filled, student is not registred and a alert is sent.
    if ( !std_name || !std_contact || !std_email || !std_id || !registerd_course){
        alert('Please fill every details')
        return
    }

    // if id is already present, dont add student, show alert message and reload the page
    if(localStorage.getItem(std_id) !== null){
        alert('student ID already exist')
        location.window.reload()
    }
    // if(ids.includes(std_id)){
    //     alert('student ID already exist.')
    //     location.window.reload()
    // }

    // else push the student id into the array
    // ids.push(std_id) 
    

    //creting the student object
    let student = new Student(std_name, std_id, std_email, std_contact, registerd_course)

    // storing student object in localStorage usng id as key
    localStorage.setItem(std_id, JSON.stringify(student)) //JSON.stringify convert student object into string to store in localStorage.

    display_std_details()
})

// creating a function to display student details
function display_std_details(){
   
    let table_body = document.querySelector('tbody')
    table_body.innerHTML = ''


    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i)

        // my browser was automatically generating these key-values in localStorage, i'm ignoring it.
        if(key === 'debug' || key === 'i18nextLng' ){
            continue
        }

        // converting the string back to object
        let student = JSON.parse(localStorage.getItem(key))

        let table_row = document.createElement('tr')
        table_row.innerHTML=`
        <td>${i+1}</td> 
        <td>${student.name}</td>
        <td>${student.id}</td>
        <td>${student.email}</td>
        <td>${student.course}</td>`
        table_body.appendChild(table_row)

    }

}

// delete functionlality
const delete_btn = document.querySelector('#del')

delete_btn.addEventListener('click', ()=>{
    let delete_panel = document.querySelector('#delete_panel')
    delete_panel.classList.remove('hidden')
})

let del_std_id ;

const get_del_student_btn = document.querySelector('#get_del_student')
get_del_student_btn.addEventListener('click', ()=>{

    del_std_id = document.querySelector('#delete_std_id').value

    // if check if student exist or not
    if(localStorage.getItem(del_std_id) === null){
        alert('Student id doesnot exist')
        return
    }

    let name_strip = document.querySelector('#del_std_name')
    let email_strip = document.querySelector('#del_std_email')
    let course_strip = document.querySelector('#del_std_course')
    let id_strip = document.querySelector('#del_std_id')
    let contact_no_strip = document.querySelector('#del_std_contact_no')

    let studend = JSON.parse(localStorage.getItem(del_std_id))

    name_strip.textContent = `${studend.name}`
    email_strip.textContent = `${studend.email}`
    id_strip.textContent = `${studend.id}`
    course_strip.textContent = `${studend.course}`
    contact_no_strip.textContent = `${studend.contact_no}`

})

// actually delete student details
const confirm_delete_btn = document.querySelector('#confirm_del')
confirm_delete_btn.addEventListener('click', ()=>{
    let if_delete = confirm('Are you sure you want to permanently delete this students details?')

    if(if_delete){
        localStorage.removeItem(del_std_id)
        alert('Student details successfully deleted.')
    }

    else{
        alert('Student details not removed')
    }

    delete_panel.classList.add('hidden')
    display_std_details()
})

/* 1st Implemented delete functionality using prompt and alerts */ 

// delete_btn.addEventListener('click', ()=>{
//     let confirm_delete_request = confirm('Are you sure you want to remove student details from the system?')
    
//     if(confirm_delete_request){
//         let student_id = prompt('Enter the student Id: ')

//         if(localStorage.getItem(student_id) === null){
//             alert('Id doesnot exist, check the id and retry')
//             return
//         }

//         localStorage.removeItem(student_id)
//         display_std_details() // to refresh the display

//         // delete the deleted student id for the id array
//         let id_index = ids.indexOf(student_id)
//         if(id_index !== -1){
//             ids.splice(id_index, 1) // delete the id
//         }

//         // success message
//         alert('Student successfull removed')
//     }

// })

// ------------------------------------delete funcationality done-------------------------------


//adding edit functionalities
const edit_button = document.querySelector('#edt')
let edit_panel = document.querySelector('#edit_panel')
edit_button.addEventListener('click', ()=>{   
    edit_panel.classList.remove('hidden')
})

// getting studend ID to identify which student object to obtain and change
const get_student_btn = document.querySelector('#std_confirm_btn');


// obtaining the orginnial data.
const update_button = document.querySelector('#update_btn')

get_student_btn.addEventListener('click', () => {
    let std_id = document.querySelector('#edt_std_id').value.trim(); // added # and trim()

    if (localStorage.getItem(std_id) === null) {
        alert('Student ID not present');
        return; // important to stop execution if not found
    }

    alert('Replace the orginial values with new values.')

    let name = document.querySelector('#new_std_name');
    let email = document.querySelector('#new_std_email');
    let new_std_id = document.querySelector('#new_std_id');
    let contact_no = document.querySelector('#new_std_no');
    let course = document.querySelector('#new_reg_course');

    // parsing the student object.
    let current_student = JSON.parse(localStorage.getItem(std_id));

    // displaying original values in the input field
    name.value = current_student.name;
    email.value = current_student.email;
    new_std_id.value = current_student.id;
    course.value = current_student.course;
    contact_no.value = current_student.contact_no;

    // console.log(current_student)
    update_button.classList.remove('hidden')
});

// updating new data
update_button.addEventListener('click', ()=>{
    let name = document.querySelector('#new_std_name');
    let email = document.querySelector('#new_std_email');
    let new_std_id = document.querySelector('#new_std_id');
    let contact_no = document.querySelector('#new_std_no');
    let course = document.querySelector('#new_reg_course');

    let studend = new Student(name.value, new_std_id.value, email.value, contact_no.value,course.value)

    localStorage.removeItem(new_std_id.value)
    localStorage.setItem(new_std_id.value, JSON.stringify(studend))

    // again hidding edit panel
    edit_panel.classList.add('hidden')

    // displaying new updated data
    display_std_details()
    
})



// so that the student data is display even after the tab is relaoded.
window.addEventListener('DOMContentLoaded',display_std_details) 