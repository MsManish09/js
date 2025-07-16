console.log("functions are introduced...")

// Function to return odd numbers in a range

function odd(start, end){

    if (start % 2 === 0){
        start += 1
    }
    
    let oddNums = []

    for ( let i = start; i <= end; i += 2)
    {
        oddNums.push(i)
    }

    return oddNums
}

console.log( odd(1, 100) )

console.log( odd(2, 100) )

// --------------------------------------------------

// Fucntion to return even number in a range

function even( start, end )
{
    if (start % 2 !== 0){
        start += 1
    }

    let evenNums = []

    for( let i = start; i <= end; i += 2 )
    {
        evenNums.push(i)
    }

    return evenNums
}

console.log(even(2, 150))

console.log(even(1, 99))

// -------------------------------------------------------

// Functions  to find prime num in a range

function prime( start, end ){

    let primeNums = []
    

    for ( let i = start; i <= end; i++ )
    {

        if( start <=1 ) {
            continue; 
        }
        
        let isprime = true

        for (let j = 2; j <= i / 2; j++ )
        {
            if( i % j === 0 ){
                isprime = false
                break
            }
        }

        if (isprime) { primeNums.push(i) }
    }

    return primeNums
}

console.log( prime(2, 10) )

// --------------------------------------------------------

function a(){
}
let und = a()
console.log(und) // no return value in function a()  --> returns undefined value.

// --------------------------------------------------------
//  Arrays

let arr = ['manish', 24, true, false, null]

console.log(arr)

// -----------------------------------------------------------

arr.push('M S')
console.log(arr)
console.log(arr.length)

console.log("--------------------------------------------")

for (i in arr){
    console.log( arr[i] )
}

//  2D array --> Array inside a array
let arr2D = [
    [ 10, 20],
    [ 20 , 40]
]

console.log(arr2D)

console.log( arr2D[0][0] ) // 1st element in the 1st row
console.log( arr2D[0][1] ) // 2nd element in 1st row

console.log( arr2D[1][1] ) // 2nd row, 2nd element
console.log( arr2D[1][0] ) // 2nd row, 1st element

console.log("--------------------------------------")
// 3D arrays --> Array[Array[array]]

let arr_3D = [
    [
        [10, 20 ],
        [50, 60 ]
    ], 

    [
        [ 100, 200 ],
        [ 400, 500 ]
    ]
]

console.log(arr_3D)

console.log("1st plane 1st row, 1st element : " + arr_3D[0][0][0]) // 10
console.log("1st plane 1st row, 2st element : " + arr_3D[0][0][1]) // 20

console.log("1st plane 2nd row, 1st element : " + arr_3D[0][1][0]) // 50
console.log("1st plane 1st row, 2st element : " + arr_3D[0][1][1]) // 60

console.log("")
console.log("2nd plane elements")

console.log("2nd plane 1st row, 1st element : " + arr_3D[1][0][0]) // 100
console.log("2nd plane 1st row, 2nd element : " + arr_3D[1][0][1]) // 100

console.log("")

console.log("2nd plane 2nd row, 1st element : " + arr_3D[1][1][0]) // 400

console.log("2nd plane 2nd row, 2nd element : " + arr_3D[1][1][1]) // 500

