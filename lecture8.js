var a = 'a Outside {}'
let b = 'b outside {}'
const c = 'c outside {}'

console.log(a)
console.log(b)
console.log(c)

console.log('-------------------------------------------------------')

if(true){
    var a = 'a inside if{}'
    let b = 'b inside if{}'
    const c = 'c inside if{}'
    
    var d ="d inside if{}"
    let e = 'e inside if{}'

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)

    console.log('-------------------------------------------------------')
}

console.log(a) // a inside if{}
console.log(b) // b outside if{}
console.log(c) // c outside if{}

console.log(d) // d inside if{}
// console.log(e) // 'e' Error: undefined, is block variable(declared with let/const inside {})

console.log('-------------------------------------------------------')

function manish(){
    var a = 'a declared inside function manish()' // functional, only limited to this function, even after declared using var keyword
    let b = 'b declared inside function manish()' // declared using let/const so its block scope
    const c =  'c declared inside function manish()' // declared using let/const so its block scope
    
    console.log(a) // a declared inside function manish()
    console.log(b) //b declared inside function manish()
    console.log(c) // c declared inside function manish()
    
    console.log(d) // since declared using var, u can use 'd' in fucntion, but if another d is declared and initialized, then when you refer to d, then 'd' declared inside the function is refered
    console.log('-------------------------------------------------------')
}

manish()

console.log(a) // a inside if{}, doesn't reinitialied to 'a declared inside function manish()'