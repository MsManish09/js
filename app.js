let a = 10;


console.log(typeof(a) ,a)

let b = "10";

console.log(a === b) // strict equality, checks the value and datatype (false)
console.log(a == b) // check the value not the data type (true)

// --------------------------------
// Variable lecture: 
const name = "manish"
const rollno = 10
let isMajor = true
let salary;
let retired = null;

let favColor = ["Black","Blue", "white" ]
const info = {name : "Manish", city : "Bengaluru"}

console.log("My name is ", name ," and my favorite color is ", favColor)
console.log("Roll Number: ", rollno)
console.log("is major? : ",isMajor)
console.log("Salary: ", salary)
console.log("Retried? :", retired)

// -----------------------------------------------------------

// Operators lecture: 

a = 10 
b = 10 

console.log(a + b, a*b, a - b, a/b, a**b, a % b)
//  comparision operators:
c= "10"
console.log(a == b, a == c) //true , true
console.log(a ===b , a === c) //true, false


// Control flow and Logical operators
marks = 40
attendence = 78

if (marks >= 35 && attendence >= 75){
    console.log("Pass")
}

else{
    console.log("Fail")
}

marks = 97
attendence = 66

if (marks >= 35 || attendence >= 75){
    console.log("Pass")
}

else{
    console.log("Fail")
}
// -------------------------------------------------------
hh = 10
gg = "10"
if (hh === gg)
    {
        console.log("hh == gg")
    }
else{
    console.log("hh ! gg")
}

//  Switch ________________________________________________

let col = "blue";

switch  (col){
    case 'red':
        console.log(`Favorite color is ${col}`);
        break;

    case 'blue':
        console.log(`Favorite color is ${col}`);
        break;

    case 'green':
        console.log(`Favorite color is ${col}`);
        break;

    default:
        console.log('Favorite color not found...');
}

let count = 0;

while(true){
    console.log(count)
    count += 1

    if(count === 15){
        break;
    }
}

count = 0
do{
    console.log(`${count + 1}: My name is Manish `)
    count += 1
} while(count < 5)

console.log("")

for(i = 1; i <= 15; i++){
    console.log(`${i}: My name is manish M S`)
}

// Program to print 1 - 100 even numbers
console.log("")
console.log("Print even number from 1 - 100")

for(i = 2; i <= 100; i +=2){
    console.log(i)
}

count = 1
console.log("")
console.log("Print odd number from 1 - 100")
while(count <= 100){
    console.log(count)
    count += 2
}