// 1. nested objects.
/*

{let company = {
    address: {
        street: '1st street',
        city: 'Bengaluru',
        zipcode: 560049,
    },

    product_services: ['p1','p2', 'p3']
}

function printCampanyAddress(){
    console.log(`${company.address.street}, ${company.address.city}, ${company.address.zipcode}`)

    console.log(`${company.product_services}`)
}

printCampanyAddress()}

*/
//-------------------------------------------------------

// 3. call, bind and apply

/*

let obj1 = {
    name: 'mani',
    greet : function(wish){
        console.log(`${wish}, ${this.name}`)
    }
}

let obj2 = {
    name: 'Manish'
}

obj1.greet('Hello') // Hello, mani 

// using call
obj1.greet.call(obj2, 'hello') // hello, Manish

// using apply
obj1.greet.apply(obj2, ['Good Morning']) // Good Morning, Manish

// using bind

let bindGreet = obj1.greet.bind(obj2, 'GoodNight')
bindGreet() // GoodNight, Manish

for (let person of obj2){
    console.log(person)
    obj1.greet.call(person, 'Good Morning')
    
    console.log("")
    console.log("")
}

*/
//---------------------------------------------------------

// 4. button click -> after 3 sec text
let btn = document.querySelector('#btn')
console.log(btn)
let text_area = document.querySelector('#text')

btn.addEventListener('click', ()=>{
    setTimeout(() => {
    text_area.classList.add('clicked')
    text_area.innerHTML = 'Button Is Clicked'
    }, 3000);

})

// --------------------------------------------------------

