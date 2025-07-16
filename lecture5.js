   
let arr = [1, 2 ,3, 5, 7, 10]


let obj = {
    a: 10,
    b: "hello", 
    c: true,
    d_fn : function(){
        console.log( "this is method, fucntions inside a object  (obj))" )
    }
}

console.log(obj.d_fn())
obj.d_fn()

for (let elements of arr){
    console.log(elements)
} // for (in) used to iterate arrays

// for (of) used to iterate objects

for (let keys in obj){
    console.log(keys)
    console.log(obj[keys])
} // for (in) used to iterate over objects
